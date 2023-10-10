import Header from "../../components/Header";
import { Box,  Button, Typography } from "@mui/material";
import React from 'react';
import Grid from '@mui/material/Grid';
import "../trainingForm/training.css"



const Login = () => {
    return (
        <Box m="20px" >
        {/* Creating the training data upload form */} 
        {/*<Header title="Race Leaderboard" subtitle="Update race leaderboard" />*/}
        <Box marginTop="15%">
            <form>
                {/* The grid component creates a vertical stack of the form elements and centers the forms */}
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h3">Login</Typography>
                    <Grid item xs={8}>
                        <input type="text" id="modelName"  placeholder="Username" required/> {/* The input is where the participants enter their model name */}
                    </Grid>
                    <Grid item xs={8}>
                        <input type="password" id="modelName"  placeholder="Password" required/> {/* The input is where the participants enter their model name */}
                    </Grid>
                    <Grid item xs={8}>
                        <input type="text" id="modelName"  placeholder="Role (Organiser or Participant)"  required/> {/* The input is where the participants enter their model time */}
                    </Grid>
                    <Grid item xs={8}>
                    {/* Submit Button */}
                    <Button type="submit" id="uploadButton" color="secondary" variant="contained">
                        Login
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Box>
    );
};

export default Login;