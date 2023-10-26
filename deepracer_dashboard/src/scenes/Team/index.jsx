import React, { useState, useEffect } from "react";
import { Box, Button, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../../components/Header";
import { motion } from 'framer-motion';
import "../Team/team.css"
import db from "../../firebase"


const Team =  () => {
    // use the teamCode as field in database 
    const [teamCode, setTeamCode] = useState('');
    // the below are used to check if users have either joined or created a team
    const [createdTeam, setCreatedTeam] = useState(false);
    const [joinedTeam, setJoinedTeam] = useState(false);

    const handleCreateTeam = () => {
        // this function will generate 6 digit code when the user creates a new team
        const code = Math.floor(100000 + Math.random() * 900000);
        // testing to see if code is generated
        console.log("This is the generated code" + code)

        const teamName = document.getElementById('teamName').value;

        // save to firebase
        db.collection('teams').add({
            teamCode: code,
            teamName: teamName
        })
        .then(() => {
            setTeamCode(code);
        })
        .catch(error => {
            console.log(error);
        });

        // this will make the form disappear and show congratulation message
        setCreatedTeam(true)
    }

    // Catching join team code
    const handleJoinTeam = () => {
        // reads the value from the join team input
        const code = document.getElementById('joinTeamCode').value;
        // testing to see if read correctly
        console.log('Join code entered:', code);
        // this will be placed at the end of the function, when team has been joined. It will show congratulation message
        setJoinedTeam(true)
        // Firebase query...
      
      }
    // animation for the congratulation message
    const messageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    return(
        <Box m="20px">
            <Header title="Join Or Create Team" />
            <Box marginTop="5%">
                {/* The below condition checks if either team has been created or joined. If neither then shows the form */}
                {
                !createdTeam &&
                !joinedTeam &&
                (
                <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="5%">
                    <Grid item xs={8}>
                        {/* This input allows the user to create a new team */}
                        <input type="text" id="teamName" class="teamInput" placeholder="Give your dream team a name!" />
                    </Grid>
                    <Grid item xs={8}>
                    {/* Button for submitting team name */}
                    <Button
                    onClick={() => {
                        handleCreateTeam(); // calls the function to create new team for the user.
                    }}
                    type="submit" id="uploadButton" color="secondary" variant="contained">
                            Create Team
                    </Button>
                    </Grid>
                    <Grid item xs ={8} marginTop='2.5%'>
                        <Typography variant="h2">
                            OR
                        </Typography>
                    </Grid>
                    <Grid item xs={8} marginTop='2.5%'>
                        {/* This input allows the user to create a new team */}
                        <input type="text" id="joinTeamCode" class="teamInput" placeholder="Enter Code to Dream Team! " />
                    </Grid>
                    <Grid item xs={8}>
                        {/* Button for submitting team code */}
                    <Button onClick={ () =>{
                        handleJoinTeam();// calls the function to join new team for the user.
                    }
                    } type="submit" id="uploadButton" color="secondary" variant="contained">
                            Join Team
                    </Button>
                    </Grid>
                </Grid>
                )
                }
                {/* If the user has already joined or created a team, then a congratulations message will be displayed */}
                {createdTeam && // the first condition checks if team was created, if so then displays the code accordingly
                    // The motion.div gives the message animation
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    transition={{ duration: 0.5 }}
                    >
                        {/* Displaying the congratulations message */}
                        <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop='5%'>
                            <Typography variant="h2">
                                Congratulation you have created your team!
                            </Typography>
                        </Grid>
                    </motion.div>
                }
                {joinedTeam && //  if the user joined a team, then it will display the congratulation message accordingly
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    transition={{ duration: 0.5 }}
                    >
                        {/* Displaying the congratulations message */}
                        <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop='5%'>
                        <Typography variant="h2">
                            Congratulation you have joined your dream team!
                        </Typography>
                        </Grid>
                </motion.div>
                }
            </Box>
        </Box>
    );
};

export default Team;