import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import axios from "axios";

// Register component
const Register = () => {
  // State variables for form fields, password requirements, Snackbar open state, and alert message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasNumberOrSymbol, setHasNumberOrSymbol] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasEightChars, setHasEightChars] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });

  // Hook for navigation
  const navigate = useNavigate();

  // User context
  const user = useContext(UserContext);

  // Function to handle Snackbar close
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function to handle password change and check password requirements
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setHasNumberOrSymbol(/[0-9!@#$%^&*]/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
    setHasEightChars(value.length >= 8);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check form fields
    if (!email || !password || !confirmPassword) {
      setAlert({
        message: "All fields are required",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    // Check password requirements
    if (!hasNumberOrSymbol || !hasUppercase || !hasEightChars) {
      setAlert({
        message: "Password does not meet the requirements",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match", severity: "error" });
      setOpen(true);
      return;
    }

    // Firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(user);
        setAlert({
          message: "User signed up successfully",
          severity: "success",
        });
        setOpen(true);

        // ADDING A USER TO OUR FIRESTORE DB
        try {
          const UID = userCredential.user.uid

          const dbUser = {
            email: email,
            teamName: "",
            UID: UID          
          }
          
          // add user to db
          axios
          // POST TO USERS/ADDUSER ENDPOINT
            .post('http://localhost:3001/users/addUser', dbUser)
            .then(() => console.log('User Created in Firebase DB and Firebase Auth'))
            .catch(err => {
          console.error(err);
          });
        }
        catch(err) {
          console.error(err)
        }
          

        // Navigate to dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        let errorMessage;
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already in use";
            break;
          case "auth/invalid-email":
            errorMessage = "The email address is not valid";
            break;
          case "auth/operation-not-allowed":
            errorMessage = "Email/password accounts are not enabled";
            break;
          case "auth/weak-password":
            errorMessage = "The password is not strong enough";
            break;
          default:
            errorMessage = error.message;
        }
        setAlert({
          message: "Error signing up: " + errorMessage,
          severity: "error",
        });
        setOpen(true);
      });
  };

  // Render
  return (
    <Box m="20px">
      {/* Snackbar for alerts */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      {/* Registration form */}
      <Box marginTop="15%">
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h3"
              sx={{ paddingLeft: "16px", paddingTop: "16px" }}
            >
              Register
            </Typography>
            {/* Email input */}
            <Grid item xs={8}>
              <input
                type="text"
                id="modelName"
                placeholder="Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            {/* Password input with requirements */}
            <Grid item xs={8}>
              <Grid container direction="column">
                <input
                  type="password"
                  id="modelName"
                  placeholder="Password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                >
                  <FormHelperText>
                    <Grid container spacing={1}>
                      {/* Password requirement: at least 8 characters */}
                      <Grid item xs={12} display="flex" alignItems="center">
                        {hasEightChars ? (
                          <Done fontSize="small" color="success" />
                        ) : (
                          <Close fontSize="small" color="error" />
                        )}
                        <Typography
                          color={hasEightChars ? "success.main" : "error.main"}
                          style={{ marginLeft: 8 }}
                        >
                          At least 8 characters
                        </Typography>
                      </Grid>
                      {/* Password requirement: contains a number or symbol */}
                      <Grid item xs={12} display="flex" alignItems="center">
                        {hasNumberOrSymbol ? (
                          <Done fontSize="small" color="success" />
                        ) : (
                          <Close fontSize="small" color="error" />
                        )}
                        <Typography
                          color={
                            hasNumberOrSymbol ? "success.main" : "error.main"
                          }
                          style={{ marginLeft: 8 }}
                        >
                          Contains a number or symbol
                        </Typography>
                      </Grid>
                      {/* Password requirement: uses at least one uppercase letter */}
                      <Grid item xs={12} display="flex" alignItems="center">
                        {hasUppercase ? (
                          <Done fontSize="small" color="success" />
                        ) : (
                          <Close fontSize="small" color="error" />
                        )}
                        <Typography
                          color={hasUppercase ? "success.main" : "error.main"}
                          style={{ marginLeft: 8 }}
                        >
                          Uses at least one uppercase letter
                        </Typography>
                      </Grid>
                    </Grid>
                  </FormHelperText>
                </Box>
              </Grid>
            </Grid>
            {/* Password confirmation input */}
            <Grid item xs={8}>
              <input
                type="password"
                id="modelName"
                placeholder="Confirm Password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Grid>
            {/* Register button */}
            <Grid item xs={8}>
              <Button
                type="submit"
                id="uploadButton"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Grid>
            {/* Sign in button */}
            <Grid item xs={8}>
              <Button color="primary" variant="outlined" href="/login">
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
