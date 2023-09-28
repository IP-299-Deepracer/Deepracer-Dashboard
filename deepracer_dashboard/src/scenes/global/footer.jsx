import Paper from '@mui/material/Paper';
import RMIT from "../../assets/aws.png";
import AWS from "../../assets/rmit.png"
import { Box, Button, IconButton, Typography, colors, useTheme, Container } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <Paper sx={{backgroundImage: 'none',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: colours.navyAccent[900],
    ml: 0
    }} component="footer">
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
            
          <img src={RMIT} alt="" height={35 + 'px'} width={110 + 'px'}/>
          <Box sx={{width: '20px'}}></Box>
          <img src={AWS} alt="" height={35+ 'px'} width={110+ 'px'}></img>
        </Box>
    </Paper>
    );
    };

export default Footer;