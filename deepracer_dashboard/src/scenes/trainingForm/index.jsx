import Header from "../../components/Header";
import { Box,  Button, TextField } from "@mui/material";
import React from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../trainingForm/training.css"


const TrainingForm = () => {

    return(
        <Box m="20px" >
            <Header title="Training Data Upload" subtitle="Upload training logs" />
            <Box marginTop="10%">
                <form>
                    <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Grid item xs={8}>
                            <TextField label="Model Name" variant="filled" className="text-field"/>
                        </Grid>
                        <Grid item xs={8}>
                            <input type="file" id="file1" name="file1" accept=".csv" label="Upload" className="input-field"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <input type="file" id="file2" name="file2" accept=".csv" className="input-field"/>
                        </Grid>
                        <Grid item xs={8}>
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};


export default TrainingForm;