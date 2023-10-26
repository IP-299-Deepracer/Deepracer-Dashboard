import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Typography, Avatar } from '@mui/material';
import Header from "../../components/Header";
import Grid from '@mui/material/Grid';

// This is the profile PopUp accessed from settings Icon
const AccountInfoPopup = () => {

  return (
    <Box sx={{ p: 2, background: 'linear-gradient(to right, #7e348d,#282441)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="h4">Ian Peake</Typography> {/* Name of the Person */}
      </Box>
      {/* Details of User */}
      <Box sx={{ mt: 2 }}>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Email</Typography>
        <Typography sx={{color: "#ff9900"}}>testing@testing.com</Typography>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Team</Typography>
        <Typography sx={{color: "#ff9900"}}>Ferrari</Typography>
        <Typography variant='h5' sx={{fontWeight: "bold"}}>Team Code</Typography>
        <Typography sx={{color: "#ff9900"}}>472389</Typography>
      </Box>
    </Box>
  );
};

export default AccountInfoPopup;