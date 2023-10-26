import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
// import { useTheme } from '@emotion/react';
// import { tokens } from "../../theme";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomDialog({ open, onClose, rowData }) {
    // const theme = useTheme();
    // const colours = tokens(theme.palette.mode);
  return (
    <Dialog
      fullScreen
      open={open}
      onClick={onClose}
      TransitionComponent={Transition}
    >
    <AppBar sx={{ position: 'relative', backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}>
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
