import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { tokens } from "../../theme";

const theme = createTheme();
const colours = tokens(theme.palette.mode);

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="m">
        <Box sx={{ paddingTop: 30, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Typography component="h1" variant="h3" sx={{fontWeight: 'bold', fontStyle: 'justify', color: "#ff9900"}}>
            WELCOME TO THE DEEPRACER DASH!
          </Typography>
          <Box sx={{ paddingTop: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button
            // when the button is clicked, it will be redirected to dashboard page
            href="/login"
            variant="contained" sx={{ margin: 2, height: 50, width: 300, backgroundColor: "#f79400", ":hover": { backgroundImage: 'linear-gradient(to right, #7e348d,#282441)' }}}>
              Let's Race!
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
    
  );
};

export default LandingPage;

