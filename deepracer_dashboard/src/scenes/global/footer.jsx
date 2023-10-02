import Paper from '@mui/material/Paper';
import AWS from "../../assets/aws.png";
import RMIT from "../../assets/race.png"
import { Box, Button, IconButton, Typography, colors, useTheme, Container } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width:'100%',
            bottom: 0,
            position: 'fixed',
            mb: 2,
          }}
          component="footer"
        >
            
          <img src={AWS} alt="" height={35 + 'px'} width={110 + 'px'}/>
          <Box sx={{width: '20px'}}></Box>
          <img src={RMIT} alt="" height={35+ 'px'} width={150+ 'px'}></img>
        </Box>
    );
    };

export default Footer;