import React, { useState, useEffect } from "react";
import { Box, Button, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../../components/Header";
import "../Team/team.css"


const Team =  () => {
    // use the teamCode as field in database 
    const [teamCode, setTeamCode] = useState('');
    // this function will generate 6 digit code when the user creates a new team
    const handleCreateTeam = () => {
        const code = Math.floor(100000 + Math.random() * 900000);
        console.log("This is the generated code" + code)
        
        // Save to Firebase Example
        // db.collection('teams').add({
        // teamCode: code
        // })
        // .then(() => {
        //     setTeamCode(code);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }
    // Catching join team code
    const [joinCode, setJoinCode] = useState('');

    const handleJoinTeam = () => {

        const code = document.getElementById('joinTeamCode').value;

        console.log('Join code entered:', code);
      
        // Firebase query...
      
      }


    return(
        <Box m="20px">
            <Header title="Join Or Create Team" />
            <Box marginTop="5%">
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="5%">
                    <Grid item xs={8}>
                        {/* This input allows the user to create a new team */}
                        <input type="text" class="teamInput" placeholder="Give your dream team a name!" />
                    </Grid>
                    <Grid item xs={8}>
                    <Button onClick={handleCreateTeam} type="submit" id="uploadButton" color="secondary" variant="contained">
                            Create Team
                    </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="2.5%">
                    <Grid item xs ={8}>
                        <Typography variant="h2">
                            OR
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="2.5%">
                    <Grid item xs={8}>
                        {/* This input allows the user to create a new team */}
                        <input type="text" id="joinTeamCode" class="teamInput" placeholder="Enter Code to Dream Team! " />
                    </Grid>
                    <Grid item xs={8}>
                    <Button onClick={handleJoinTeam} type="submit" id="uploadButton" color="secondary" variant="contained">
                            Join Team
                    </Button>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
};

export default Team;