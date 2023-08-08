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
        {['Leaderboard', 'Statistics', 'Upload Data'].map((text, index) => (
          <ListItem key={text} disablePadding>
            {/* button links to trimmed (no whitespace) lowercase endpoint */}
            <ListItemButton key={text.toLowerCase().trim()} component={Link} to={text.toLowerCase().trim()}>
              <ListItemIcon>
                {index === 0 ? <LeaderboardIcon /> : <></>}
                {index === 1 ? <StackedLineChartIcon /> : <></>}
                {index === 2 ? <FileUploadIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
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