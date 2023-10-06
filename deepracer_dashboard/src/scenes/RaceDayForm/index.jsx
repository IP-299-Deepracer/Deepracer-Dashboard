import Header from "../../components/Header";
import { Box,  Button, TextField, Typography } from "@mui/material";
import React from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../trainingForm/training.css"



const RaceForm = () => {
    return (
        <Box m="20px" >
        {/* Creating the training data upload form */} 
        <Header title="Race Leaderboard" subtitle="Update race leaderboard" />
        <Box marginTop="5%">
            <form>
                {/* The grid component creates a vertical stack of the form elements and centers the forms */}
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h3">New Race Record</Typography>
                    <Grid item xs={8}>
                        <input type="text" id="modelName"  placeholder="Team Name" required/> {/* The input is where the participants enter their model name */}
                    </Grid>
                    <Grid item xs={8}>
                        <input type="text" id="modelName"  placeholder="Model Name" required/> {/* The input is where the participants enter their model name */}
                    </Grid>
                    <Grid item xs={8}>
                        <input type="text" id="modelName"  placeholder="Time (Secs)" required/> {/* The input is where the participants enter their model time */}
                    </Grid>
                    <Grid item xs={8}>
                    {/* Submit Button */}
                    <Button type="submit" id="uploadButton" color="secondary" variant="contained">
                        Update Leaderboard
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Box>
    );
};

export default RaceForm;