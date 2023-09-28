import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { tokens } from "../../theme";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import RMIT from "../../assets/aws.png";
import AWS from "../../assets/rmit.png"


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
      <Paper sx={{marginTop: 'calc(10% + 50px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: colours.default
    }} component="footer">
      <Container maxWidth="lg">
        {/* <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box> */}

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <img src={RMIT} alt="" height={35 + 'px'} width={110 + 'px'} />
          <img src={AWS} alt="" height={35+ 'px'} width={110+ 'px'}  sx={{marginLeft: 16}}></img>
        </Box>
      </Container>
    </Paper>
    </ThemeProvider>
    
    
  );
};

export default LandingPage;

