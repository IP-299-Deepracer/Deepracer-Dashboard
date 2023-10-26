import Header from "../../components/Header";
import { Box,  Button, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import "../trainingForm/training.css"
import { UserContext } from "../../UserContext";
import axios from "axios";



const RaceForm = () => {
    const [teamName, setTeamName] = useState("");
    const [modelName, setModelName] = useState("");
    const [modelTime, setModelTime] = useState(0);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const currentUID = userContext.uid;
            
            axios
                // get teamname of user
                .get('http://localhost:3001/users/' + currentUID)
                .then((response) => {
                  // Find the user with the matching UID
                    if (response) {
                        setTeamName(response.data);
                    } 
                    else {
                        console.log("USER DOESNT EXIST")
                    }
                })
                .catch((error) => {
                    console.error("Get user Error: ", error);
                });
    },[]);

    // log teamName
    useEffect(() => {
        console.log("THE ANSWER IS: ", teamName)
    }, [teamName])

    // handle the submitting of the form (upload files)
    const handleSubmit = async (event) => {
        event.preventDefault();
        var timeFloat3 = parseFloat(modelTime).toFixed(3);
        try {
            // create structure to add model with info to db
            const dbModel = {
                modelName: modelName,
                teamName: teamName,
                modelTime: timeFloat3
            }
            
            // add user to db
            axios
            // POST TO MODELS/ADDMODELS ENDPOINT
                .post('http://localhost:3001/raceLeaderboard/addRaceEntry', dbModel)
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


    return (
        <Box m="20px" >
        {/* Creating the training data upload form */} 
        <Header title="Race Leaderboard" />
        <Box marginTop="5%">
            <form method='post' onSubmit={handleSubmit}>
                {/* The grid component creates a vertical stack of the form elements and centers the forms */}
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h3">New Race Record</Typography>
                    <Grid item xs={8}>
                        <input type="text" class="textInput" placeholder="Model Name" required onChange={(e) => setModelName(e.target.value)}/> {/* The input is where the participants enter their model name */}
                    </Grid>
                    <Grid item xs={8}>
                        <input type="number" step="0.001" class="textInput" placeholder="Time (Secs)" required onChange={(e) => setModelTime(e.target.value)}/> {/* The input is where the participants enter their model time */}
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