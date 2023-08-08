import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer({state, setState, toggleDrawer}) {

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Leaderboard', 'Statistics', 'Upload Data', 'Project Information'].map((text, index) => (
          <ListItem key={text} disablePadding>
            {/* button links to trimmed (no whitespace) lowercase endpoint */}
            <ListItemButton key={text.toLowerCase().trim()} component={Link} to={text.toLowerCase().replace(/\s/g, "")}>
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : <></>}
                {index === 1 ? <LeaderboardIcon /> : <></>}
                {index === 2 ? <StackedLineChartIcon /> : <></>}
                {index === 3 ? <FileUploadIcon /> : <></>}
                {index === 4 ? <HelpIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* DRAWER IS TOGGLED FROM NAVBAR WITH BURGER BUTTON */}
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}