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
      <Container component="main" maxWidth="m">
        <Box sx={{ paddingTop: 30, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Typography component="h1" variant="h3" sx={{fontWeight: 'bold', fontStyle: 'justify', color: colours.orangeAccent[500]}}>
            WELCOME TO THE DEEPRACER DASH!
          </Typography>
          <Box sx={{ paddingTop: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button
            onClick={
              handleJoinEvent
            }
            variant="contained" sx={{ margin: 2, height: 50, width: 300, backgroundColor: "#f79400", ":hover": { backgroundColor:  colours.purpleAccent[400] }}}>
              Let's Race!
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
    
  );
};

export default LandingPage;

