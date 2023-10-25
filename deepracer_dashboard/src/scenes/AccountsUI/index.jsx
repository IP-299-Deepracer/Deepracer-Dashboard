import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Typography, Avatar } from '@mui/material';
import Header from "../../components/Header";
import Grid from '@mui/material/Grid';


function AccountInfoPopup() {


  const account = {
    name: 'John Doe',
    email: 'john@example.com',
    team: 'Pro',
    code: '123456',
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ mr: 2 }}>JD</Avatar>
        <Typography variant="h4">{account.name}</Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography>Email: {account.email}</Typography>
        <Typography>Team: {account.team}</Typography>
        <Typography>Code: {account.code}</Typography>
      </Box>
    </Box>
  );
}

export default AccountInfoPopup;