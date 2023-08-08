import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import TempDraw from '../drawer/temporarydrawer';

export default function ButtonAppBar() {
        // from temporarydraw.js to toggle the draw when clickling the burger icon 
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
    setState({ ...state, [anchor]: open });
    };


    return (
    <Box sx={{
        flexGrow: 1, 
        bgcolor: 'primary.main',
        }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
                >
                <MenuIcon />
            </IconButton>
        <Typography textAlign = "right" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Deepracer Dash
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
    </AppBar>
    <TempDraw state={state} setState={setState} toggleDrawer={toggleDrawer}></TempDraw>
    </Box>
    );
}