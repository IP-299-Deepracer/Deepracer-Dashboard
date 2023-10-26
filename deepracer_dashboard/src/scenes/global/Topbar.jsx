import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RaceAws from "../../assets/RaceAWS.png";
import Popover from "@mui/material/Popover";
import React, { useState } from 'react';
import AccountInfoPopup from "../AccountsUI";
import PhysicalCar from "../PhysicalCarIP";

const Topbar = () => {
  // const theme = useTheme();
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [ipAnchorEl, setIpAnchorEl] = useState(null);
  
  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };
  
  const handleIpClick = (event) => {
    setIpAnchorEl(event.currentTarget);  
  };



  return (
    <Box display="flex" justifyContent="space-between" 
      sx={{
        paddingLeft:"16px",
        paddingRight:"16px",
        paddingTop: "16px",
      }}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={"#161e2c"}
        borderRadius="3px"
        borderColor={"#b39ddb"}
        border="solid"
        marginBottom={10 + "px"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon 
          />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton onClick={colourMode.toggleColourMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleSettingsClick}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Popover
          open={Boolean(settingsAnchorEl)}
          anchorEl={settingsAnchorEl}
          onClose={() => setSettingsAnchorEl(null)} 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <AccountInfoPopup />
        </Popover>
        <IconButton onClick={handleIpClick}>
        <img
          alt="profile-user"
          width="50px"
          height="30px"
          src={
            RaceAws
          }
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />        
                
          </IconButton>
      <Popover
        open={Boolean(ipAnchorEl)}
        anchorEl={ipAnchorEl}
        onClose={() => setIpAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <PhysicalCar /> 
      </Popover>
      </Box>
    </Box>
  );
};

export default Topbar;
