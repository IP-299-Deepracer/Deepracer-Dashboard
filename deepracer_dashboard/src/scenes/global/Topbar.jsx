import { Box, IconButton, colors, useTheme } from "@mui/material";
import { useContext } from "react";
import { colourModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { PaddingTwoTone } from "@mui/icons-material";
import RaceAws from "../../assets/RaceAWS.png";
import Popover from "@mui/material/Popover";
import React, { useState } from 'react';
import AccountInfoPopup from "../AccountsUI";

const Topbar = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const colourMode = useContext(colourModeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const account = {
    name: 'John Doe',
    email: 'john@example.com', 
    plan: 'Pro'
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
        <IconButton onClick={handleClick}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <AccountInfoPopup />
      </Popover>
        <IconButton>
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
      </Box>
    </Box>
  );
};

export default Topbar;
