import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { tokens } from "../../theme";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const colours = tokens(theme.palette.mode);

const LandingPage = () => {
  const navigate = useNavigate();
  const handleJoinEvent = () => {
    navigate("/register");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ paddingTop: 30, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Typography component="h1" variant="h3">
            WELCOME!
          </Typography>
          <Box sx={{ paddingTop: 2, display: "block", justifyContent: "center", paddingLeft: 4 }}>
            <Button 
            variant="contained" 
            sx={{ margin: 2, height: 50, width: 300, backgroundColor: "#f79400", ":hover": { backgroundColor:  colours.purpleAccent[400] }}} 

            >
              Start Event
            </Button>
            <Button
            onClick={
              handleJoinEvent
            }
            variant="contained" sx={{ margin: 2, height: 50, width: 300, backgroundColor: "#f79400", ":hover": { backgroundColor:  colours.purpleAccent[400] }}}>
              Join Event
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;

