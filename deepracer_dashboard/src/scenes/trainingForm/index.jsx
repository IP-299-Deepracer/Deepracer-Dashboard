import Header from "../../components/Header";
import { Box,  Button, TextField, Typography } from "@mui/material";
// import React from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../trainingForm/training.css"
import axios from 'axios';
import React, { useState } from 'react';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const TrainingForm = () => {
    const [modelName, setModelName] = useState('');
    const [modelTime, setModelTime] = useState('');
    const [evaluationCSV, setEvaluationCSV] = useState(null);
    const [trainingCSV, setTrainingCSV] = useState(null);
    const [evaluationLogs, setEvaluationLogs] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // create fileRef and uploadBytes to database
            const fileRef1 = ref(storage, "TrainingFiles/" + modelName + "-evaluationCSV.csv")
            uploadBytes(fileRef1, evaluationCSV).then((snapshot) => {
                })
            const fileRef2 = ref(storage, "TrainingFiles/" + modelName + "-trainingCSV.csv")
            uploadBytes(fileRef2, trainingCSV).then((snapshot) => {
                })
            const fileRef3 = ref(storage, "TrainingFiles/" + modelName + "-evaluationLogs.log")
            uploadBytes(fileRef3, evaluationLogs).then((snapshot) => {
                alert("Files Uploaded!")
                })
        } 
        catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return(
        <Box m="20px" >
            {/* Creating the training data upload form */} 
            <Header title="Training Data" subtitle="Upload trained model logs" />
            <Box marginTop="5%">
                <form method="post" onSubmit={handleSubmit}>
                    {/* The grid component creates a vertical stack of the form elements and centers the forms */}
                    <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography variant="h3">Upload Model Data</Typography>
                        <Grid item xs={8}>
                            <input type="text" id="modelName" class="textInput" placeholder="Model Name" required onChange={(e) => setModelName(e.target.value)}/> {/* The input is where the participants enter their model name */}
                        </Grid>
                        <Grid item xs={8}>
                            <input type="text" id="modelTime" class="textInput" placeholder="Time (Secs)" required onChange={(e) => setModelTime(e.target.value)}/> {/* The input is where the participants enter their model time */}
                        </Grid>
                        {/* The next components are for file uploads of csv files downloaded from AWS DeepRacer */}
                        <Grid item xs={8}>
                            <div class="file-input">
                                <input type="file" id="evaluationCSV" accept=".csv, text/csv" required name="evaluationCSV" onChange={(e) => setEvaluationCSV(e.target.files[0])}/>
                                <label for="file">Upload Evaluation CSV</label>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div class="file-input">
                                <input type="file" id="trainingCSV" accept=".csv, text/csv" required name="trainingCSV" onChange={(e) => setTrainingCSV(e.target.files[0])}/>
                                <label for="file">Upload Training CSV</label>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div class="file-input">
                                <input type="file" id="evaluationLogs" accept=".log" required name="evaluationLog" onChange={(e) => setEvaluationLogs(e.target.files[0])}/>
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