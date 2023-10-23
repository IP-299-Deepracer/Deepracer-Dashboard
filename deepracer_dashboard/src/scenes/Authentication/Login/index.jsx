import React, { useState, useContext } from "react";
import { Box, Button, Typography, Grid, Snackbar, Alert } from "@mui/material";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import "./styles.css";

// Login component
const Login = () => {
  // State variables for email, password, Snackbar open state, and alert message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Firebase authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(user);
        setAlert({
          message: "User signed in successfully",
          severity: "success",
        });
        setOpen(true);

        // Navigate to dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        setAlert({
          message: "Error signing in: " + errorMessage,
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
      {/* Registration button */}
      {/* Login form */}
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
              Login
            </Typography>
            {/* Email input */}
            <Grid item xs={8}>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            {/* Password input */}
            <Grid item xs={8}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            {/* Login button */}
            <Grid item xs={8}>
              <Button
                type="submit"
                id="uploadButton"
                color="secondary"
                variant="contained"
                style={{ width: "150px", marginTop: "10px" }}
              >
                Login
              </Button>
            </Grid>
            {/* Forgot password button */}
            <Grid item xs={8}>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: "250px", marginTop: "30px" }}
              >
                Forgot Password
              </Button>
            </Grid>
            {/* Sign up button */}
            <Grid item xs={8}>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: "250px" }}
              >
                Need an account? Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
