import Header from "../../components/Header";
import { Box,  Button, TextField, Typography } from "@mui/material";
import React from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../trainingForm/training.css"


const TrainingForm = () => {

    return(
        <Box m="20px" >
            {/* Creating the training data upload form */} 
            <Header title="Training Data" subtitle="Upload trained model logs" />
            <Box marginTop="5%">
                <form>
                    {/* The grid component creates a vertical stack of the form elements and centers the forms */}
                    <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography variant="h3">Upload Model Data</Typography>
                        <Grid item xs={8}>
                            <input type="text" id="modelName"  placeholder="Model Name" required/> {/* The input is where the participants enter their model name */}
                        </Grid>
                        <Grid item xs={8}>
                            <input type="text" id="modelName"  placeholder="Time (Secs)" required/> {/* The input is where the participants enter their model time */}
                        </Grid>
                        {/* The next components are for file uploads of csv files downloaded from AWS DeepRacer */}
                        <Grid item xs={8}>
                            <div class="file-input">
                                <input type="file" id="file" class="file" required/>
                                <label for="file">Upload Evaluation CSV</label>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                             <div class="file-input">
                                <input type="file" id="file" class="file" required/>
                                <label for="file">Upload Training CSV</label>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div class="file-input">
                                <input type="file" id="file" class="file" required/>
                                <label for="file">Upload Evaluation Logs</label>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                        {/* Submit Button */}
                        <Button type="submit" id="uploadButton" color="secondary" variant="contained">
                            Upload Logs
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};


export default TrainingForm;