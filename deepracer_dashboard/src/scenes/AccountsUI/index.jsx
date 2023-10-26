import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { UserContext } from '../../UserContext';
import axios from 'axios';

// This is the profile PopUp accessed from settings Icon
const AccountInfoPopup = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const userContext = useContext(UserContext);
  const currentUID = userContext.uid; 

  useEffect(() => {
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
  });


  useEffect(() => {
      axios
        // get email of user
        .get('http://localhost:3001/users/email/' + currentUID)
        .then((response) => {
          // Find the user with the matching UID
            if (response) {
                setEmailAddress(response.data);
            } 
            else {
                console.log("USER DOESNT EXIST")
            }
        })
        .catch((error) => {
            console.error("Get user Error: ", error);
        });
  });
          

  useEffect(() => {
      axios
          // get email of user
          .get('http://localhost:3001/teams/code/' + teamName)
          .then((response) => {
            // Find the user with the matching UID
              if (response) {
                  setTeamCode(response.data.code);
              } 
              else {
                  console.log("USER DOESNT EXIST")
              }
          })
          .catch((error) => {
              console.error("Get user Error: ", error);
          });
  },[teamName]);

  // log teamName
  useEffect(() => {
    console.log("TeamName: ", teamName);
    console.log("TeamCode: ", teamCode);
    console.log("Email: ", emailAddress);
}, [teamName, emailAddress, teamCode])

  return (
    <Box sx={{ p: 2, background: 'linear-gradient(to right, #7e348d,#282441)', width: "200px"}}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="h4">User Details</Typography> {/* Name of the Person */}
      </Box>
      {/* Details of User */}
      <Box sx={{ mt: 2 }}>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Email</Typography>
        <Typography sx={{color: "#ff9900"}}>{emailAddress}</Typography>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Team</Typography>
        <Typography sx={{color: "#ff9900"}}>{teamName}</Typography>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Team Code</Typography>
        <Typography sx={{color: "#ff9900"}}>{teamCode}</Typography>
      </Box>
    </Box>
  );
};

export default AccountInfoPopup;