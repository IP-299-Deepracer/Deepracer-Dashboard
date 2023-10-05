import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LeaderboardOutlined from "@mui/icons-material/LeaderboardOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  SpeedOutlined,
  QuizOutlined,
  ModelTrainingOutlined,
} from "@mui/icons-material";
import UploadIcon from '@mui/icons-material/Upload';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colours.purpleAccent[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colours.orangeAccent[500]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colours.orangeAccent[500]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#FFFFFF",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="left"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={
                    "../../assets/logoDR.png"
                  }
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={"#ffffff"}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  AWS DeepRacer
                </Typography>
                <Typography variant="h5" color={colours.navyAccent[900]}>
                  Event Portal
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* Race Day Mode */}
            <Typography
              variant="h6"
              color={"#ffffff"}
              fontWeight={"bold"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Race Day
            </Typography>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Training Mode */}
            <Typography
              variant="h6"
              color={"#ffffff"}
              fontWeight={"bold"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Training Mode
            </Typography>
            <Item
              title="Leaderboard"
              to="/leaderboard"
              icon={<LeaderboardOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Training Data"
              to="/training-data"
              icon={<ModelTrainingOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Model Evaluation"
              to="/modal-eval"
              icon={<SpeedOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            
            {/* Create Team */}
            <Typography
              variant="h6"
              color={"#ffffff"}
              fontWeight={"bold"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Create Team
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {/* Organisers Mode */}
            <Typography
              variant="h6"
              color={'#ffffff'}
              fontWeight={"bold"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Organiser Mode
            </Typography>
            <Item
              title="Race Logs"
              // to="/form"
              icon={<UploadIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Event Summary"
              // to="/form"
              icon={<SummarizeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
