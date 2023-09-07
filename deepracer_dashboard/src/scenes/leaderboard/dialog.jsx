import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button'
import { useTheme } from '@emotion/react';
import { tokens } from "../../theme";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomDialog({ open, onClose, rowData }) {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
  return (
    <Dialog
      fullScreen
      open={open}
      onClick={onClose}
      TransitionComponent={Transition}
      backgroundColor= {colours.purpleAccent[700]}
    >
    <AppBar sx={{ position: 'relative', backgroundColor: colours.purpleAccent[700] }}>
        <Toolbar>
        {rowData && (
          <>
            <Typography sx={{ flex: 1, textAlign: 'center' }} variant="h3" component="div">{rowData.name } Statistics</Typography>
            {/* Display other relevant rowData properties */}
          </>
        )}

        </Toolbar>
      </AppBar>
      <Typography>
        "This is where the graphs will go"
      </Typography>
    </Dialog>
  );
}

export default CustomDialog;
