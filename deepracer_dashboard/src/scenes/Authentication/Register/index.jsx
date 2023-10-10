import Header from "../../../components/Header";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import "../../trainingForm/training.css";

const Register = () => {
  return (
    <Box m="20px">
      <Box marginTop="15%">
        <form>
          {/* The grid component creates a vertical stack of the form elements and centers the forms */}
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
              <input type="text" id="email" placeholder="Email" required />
            </Grid>
            <Grid item xs={8}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </Grid>
            <Grid item xs={8}>
              {/* Submit Button */}
              <Button
                type="submit"
                id="uploadButton"
                color="secondary"
                variant="contained"
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
