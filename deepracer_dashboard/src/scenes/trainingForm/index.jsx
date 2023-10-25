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
    const [robomakerLog, setRobomakerLog] = useState(null);
    const [sagemakerLog, setSagemakerLog] = useState(null);
    // const [evaluationLogs, setEvaluationLogs] = useState(null);

    // handle the submitting of the form (upload files)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // create fileRef and uploadBytes to database
            const fileRef1 = ref(storage, "TrainingFiles/" + modelName + "-robomakerLog.log")
            uploadBytes(fileRef1, robomakerLog).then((snapshot) => {
                })
            const fileRef2 = ref(storage, "TrainingFiles/" + modelName + "-sagemakerLog.log")
            uploadBytes(fileRef2, sagemakerLog).then((snapshot) => {
                })
            alert("Uploaded Files Successfully!")
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
                {/* when the form is submitted, upload files */}
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
                            <label for="file">Sagemaker Log</label>
                            <div class="file-input">
                                <input type="file" id="sageMakerLog" accept=".log" required name="robomakerLog" onChange={(e) => setSagemakerLog(e.target.files[0])}/> 
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            {/* file input accepts csv files */}
                            <label for="file">Robomaker Log</label>
                            <div class="file-input">
                                <input type="file" id="robomakerLog" accept=".log" required name="robomakerLog" onChange={(e) => setRobomakerLog(e.target.files[0])}/>
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