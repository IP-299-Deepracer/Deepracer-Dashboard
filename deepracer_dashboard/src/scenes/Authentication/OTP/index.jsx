import Header from "../../../components/Header";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import "../../trainingForm/training.css";

const Otp = () => {
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
              Enter OTP to create a new organiser
            </Typography>
            <Grid item xs={8}>
              <input type="text" id="modelName" placeholder="OTP" required />{" "}
              {/* The input is where the participants enter their model name */}
            </Grid>
            <Grid item xs={8}>
              {/* Submit Button */}
              <Button
                type="submit"
                id="uploadButton"
                color="secondary"
                variant="contained"
                style={{ width: "150px", marginTop: "10px" }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: "250px", marginTop: "30px" }}
              >
                Back to login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Otp;
