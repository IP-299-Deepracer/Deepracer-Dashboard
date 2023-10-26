import Header from "../../components/Header";
import { Box,  Button, TextField, Typography } from "@mui/material";
// import React from 'react';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../trainingForm/training.css"
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { db } from "../../firebase";
import { UserContext } from "../../UserContext";

const TrainingForm = () => {
    const [modelName, setModelName] = useState('');
    const [modelTime, setModelTime] = useState('');
    const [robomakerLog, setRobomakerLog] = useState(null);
    const [sagemakerLog, setSagemakerLog] = useState(null);
    const [teamName, setTeamName] = useState("");
    const userContext = useContext(UserContext);
    // const [evaluationLogs, setEvaluationLogs] = useState(null);

    useEffect(() => {
        const currentUID = userContext.uid;
            
            axios
                // get teamname of user
                .get('http://localhost:3001/users/' + currentUID)
                .then((response) => {
                  // Find the user with the matching UID
                    if (response) {
                        setTeamName(response.data);
                        console.log("THE ANSWER IS: ", teamName)
                    } 
                    else {
                        console.log("USER DOESNT EXIST")
                    }
                })
                .catch((error) => {
                    console.error("Get user Error: ", error);
                });
    },[]);

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

            // round float to 3 places and add to db as string to preserve decimal places
            var timeFloat3 = parseFloat(modelTime).toFixed(3);
            // create structure to add model with info to db
            const dbModel = {
                modelName: modelName,
                modelTime: timeFloat3,
                teamName: teamName, // FIXME: DYNAMIC FROM LOGGED IN USER
                robomakerLog: fileRef1.fullPath,
                sagemakerLog: fileRef2.fullPath,           
            }
            
            // add user to db
            axios
            // POST TO MODELS/ADDMODELS ENDPOINT
                .post('http://localhost:3001/models/addModel', dbModel)
                .then(() => console.log('Model Added to Firebase DB'))
                .catch(err => {
            console.error(err);
            });

            alert("Uploaded Files Successfully and Updated DB!")
        } 
        catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return(
        <Box m="20px" >
            {/* Creating the training data upload form */} 
            <Header title="Training Data"/>
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
                            <input type="number" step="0.001" id="modelTime" class="textInput" placeholder="Time (Secs)" required onChange={(e) => setModelTime(e.target.value)}/> {/* The input is where the participants enter their model time */}
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