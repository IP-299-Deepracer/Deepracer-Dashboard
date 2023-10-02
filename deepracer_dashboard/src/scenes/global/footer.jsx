import AWS from "../../assets/aws.png";
import RMIT from "../../assets/race.png"
import { Box} from "@mui/material";

const Footer = () => {
    return (
      // Created a box for the footer images
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
        {/* Added images to the footer */} 
          <img src={AWS} alt="" height={35 + 'px'} width={110 + 'px'}/>
          <Box sx={{width: '20px'}}></Box> {/* Created an empty box to create space between two images */}
          <img src={RMIT} alt="" height={35+ 'px'} width={150+ 'px'}/>
        </Box>
    );
    };

export default Footer;