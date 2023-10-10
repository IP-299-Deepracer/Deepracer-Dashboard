import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import Done from "@mui/icons-material/Done";
import Close from "@mui/icons-material/Close";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasNumberOrSymbol, setHasNumberOrSymbol] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasEightChars, setHasEightChars] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", severity: "" });

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setHasNumberOrSymbol(/[0-9!@#$%^&*]/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
    setHasEightChars(value.length >= 8);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setAlert({
        message: "Email is required",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    if (!password) {
      setAlert({
        message: "Password is required",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    if (!confirmPassword) {
      setAlert({
        message: "Confirm password is required",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    if (!hasNumberOrSymbol || !hasUppercase || !hasEightChars) {
      setAlert({
        message: "Password does not meet the requirements",
        severity: "error",
      });
      setOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match", severity: "error" });
      setOpen(true);
      return;
    }

    // Continue with form submission...
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
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
