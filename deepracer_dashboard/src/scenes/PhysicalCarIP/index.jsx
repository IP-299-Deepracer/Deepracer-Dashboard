import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Typography, Avatar } from '@mui/material';
import Header from "../../components/Header";
import Grid from '@mui/material/Grid';
import "../PhysicalCarIP/IP.css"
import Button from '@mui/material/Button';

const CarIp = () => {

    return (
      <Box sx={{ p: 2, background: 'linear-gradient(to right, #7e348d,#282441)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Typography variant="h4">Connect Physical Car</Typography>
        </Box>
        {/* This is the form to connect to the Physical car being used */}
        <Box sx={{ mt: 2 }}>
          <Grid>
            <input type='text' class="carIP" placeholder='Enter Car IP'></input>
          </Grid>
          <Button type="submit" id="uploadButton" color="secondary" variant="contained" sx={{marginTop:'2.5%'}}>
                Connect
            </Button>
        </Box>
      </Box>
    );
  };

export default CarIp;