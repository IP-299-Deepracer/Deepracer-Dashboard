import { Box, Button, IconButton, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrafficIcon from "@mui/icons-material/Traffic";
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Track from "../../assets/track.png"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RMIT from "../../assets/aws.png";
import AWS from "../../assets/rmit.png"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFFF",
    color: colors.deepOrange[300],
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
  // For gold, silver, and bronze rows
  '&:nth-child(1)': {
    backgroundColor: '#D4AF37', // Gold
  },
  '&:nth-child(2)': {
    backgroundColor: 'silver', // Silver
  },
  '&:nth-child(3)': {
    backgroundColor: '#cd7f32', // Bronze
  },
  // For other rows
  '&:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3))': {
    backgroundColor: "#7e57c2",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat,};
}

const rows = [
  createData(1, "RMIT SPEEDSTER", "0:09:09"),
  createData(2, "MUI RACER", "0:10:10"),
  createData(3, "MODEL REDBULL", "0:11:10"),
  createData(4, "MODEL FERRARI", "0:11:17"),
  createData(5, "RACER", "0:12:10"),
];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title=" DEEPRACER DASHBOARD" subtitle="Welcome to the deepracer dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: "#FFA500",
              color: colors.purpleAccent[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Race Data
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        flex= "1"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={"#FFA500"}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <BadgeRoundedIcon
            sx={{ color: colors.purpleAccent[600], fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={colors.purpleAccent[800]}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            RMIT SPEEDSTER
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={16}
            >
            Model Name
          </Typography>
        </Box>
          {/* <StatBox
            title="Speedy RMIT"
            subtitle="Model Name"
            progress="0.75"
            increase="+14%"
            style={{color: colors.orangeAccent[500] }}
            icon={

            }
          /> */}
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FFA500"}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <TimerRoundedIcon
            sx={{ color: colors.purpleAccent[600], fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={colors.purpleAccent[800]}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            1:23:00
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={16}
            >
            Fatest Time
          </Typography>
        </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FFA500"}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <EmojiEventsIcon
            sx={{ color: colors.purpleAccent[600], fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={colors.purpleAccent[800]}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            35
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={16}
            >
            Rewards Earned
          </Typography>
        </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#FFA500"}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <EmojiEventsIcon
            sx={{ color: colors.purpleAccent[600], fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={colors.purpleAccent[800]}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            35
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={16}
            >
            Rewards Earned
          </Typography>
        </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={"#FFA500"}
          borderRadius="5px"
          display="flex"
          flexDirection="column"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.purpleAccent[500]}
              >
               Top 5
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.purpleAccent[500]}
              >
                Leaderboard
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.purpleAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="80vh" p="15px" flexGrow={1}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "250px" }} aria-label="customized table">
                <TableHead sx={{fontSize: 24}}>
                  <TableRow sx={{backgroundColor: colors.purpleAccent[700]}}>
                    <StyledTableCell fontSize="20">Position</StyledTableCell>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Time</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.calories}</StyledTableCell>
                      <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor="transparent"
          
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
          </Box>
          <Box>
              <img src={Track} height="400px" width="550px" m="-15px 0 0 0"></img>
          </Box>       
        </Box>
        <Box
          sx={{
            display: 'flex',
            gridColumn: 'span 12',
            gap: '20px',
            justifyContent: 'center', // Horizontally center
            alignItems: 'center',  
            marginTop: '20px',
            padding: '0',
            height: '120px'
          }}
        >
          <img src={RMIT} alt="" height={35 + 'px'} width={110 + 'px'} />
          <img src={AWS} alt="" height={35+ 'px'} width={110+ 'px'}  sx={{marginLeft: 16}}></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
