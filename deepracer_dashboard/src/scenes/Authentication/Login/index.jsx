import React, { useState } from "react";
import { Box, Button, Typography, Grid, Snackbar, Alert } from "@mui/material";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setAlert({
          message: "User signed in successfully",
          severity: "success",
        });
        setOpen(true);
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

  return (
    <Box m="20px">
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
      <Button
        style={{ position: "absolute", top: "20px", right: "20px" }}
        color="primary"
        variant="contained"
        sx={{ color: "white" }}
      >
        Register Organiser
      </Button>
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
            <Grid item xs={8}>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: "250px", marginTop: "30px" }}
              >
                Forgot Password
              </Button>
            </Grid>
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
