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
            <Header title="Training Data" subtitle="Upload trained model logs" />
            <Box marginTop="10%">
                <form>
                    <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography variant="h4">Upload Logs</Typography>
                        <Grid item xs={8}>
                            <input type="text" id="modelName"  placeholder="Model Name"/>
                        </Grid>
                        <Grid item xs={8}>
                            <input type="file" id="file1" name="file1" accept=".csv" label="Upload" className="input-field"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <input type="file" id="file2" name="file2" accept=".csv" className="input-field"/>
                        </Grid>
                        <Grid item xs={8}>
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