import Header from "../../components/Header";
import { Box,  Button, TextField } from "@mui/material";
import React from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";


const TrainingForm = () => {

    return(
        <Box m="20px">
            <Header title="Training Data Upload" subtitle="Upload training logs" />
            <form sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <TextField id="outlined-basic" label="Model Name" variant="outlined" />
            </form>
        </Box>
    );
};


export default TrainingForm;