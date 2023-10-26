import { Box, Button, IconButton, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Header from "../../components/Header";
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
import { useEffect, useState, useRef } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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

const MyComponent = () => {
  const iframeRef = useRef();

  useEffect(() => {
    const iframe = iframeRef.current;

    if(iframe) {
      iframe.addEventListener('load', () => {
        if (iframe.contentDocument) {
          iframe.contentDocument.cookie = 'session=eyJjc3JmX3Rva2VuIjoiMDExOTMwNjk3MWExODE0NzEzZTk0OWM5ZDQ3YmU4ZWIwNzFkZWJlZSJ9;';
        }
    });
    }
  }, []);
  return (
    <iframe ref={iframeRef} id="videoFrame" src="https://192.168.1.10/route?topic=/camera_pkg/display_mjpeg&width=600&height=400"></iframe>
  );
  };

const Dashboard = () => {


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { 
      field: "position", 
      headerName: "Position", 
      flex:1, 
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true,
      sortable: false
    },
    { 
      field: "teamName", 
      headerName: "Team Name", 
      flex:2, 
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: "name",
      headerName: "Model Name",
      flex: 2,
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: "time",
      headerName: "Lap Time",
      flex: 2,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true
    }
  ];

  // create apiData const that is initialised to null, and can be updated with setter
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    // Make a GET request to the models endpoint
    fetch('http://localhost:3001/models', {
      method: 'GET',
    })
      // check if response is ok
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      // if data is null then throw error
      .then((data) => {
        if (data == null) {
          throw new Error('Null data');
        }
        // then set data to variable apiData
        setApiData(data);
        console.log('API Data:', data);})
      .catch((error) => {
        console.error('Error fetching data from the API:', error);});
    }, []);

  // assign rows the data if apiData is not null (repsonse completed)
  const rows = apiData ? apiData.data : [];

  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="WELCOME TO DEEPRACER DASHBOARD"/>

        <Box>
          <Typography
          fontSize={20}
          fontWeight={"bold"}
          marginRight={"20px"}
          >
            Event Code: ###### {/* The hastag should be replaced with generated code when organiser starts event */}
          </Typography>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display= "grid"
        gridTemplateColumns= "repeat(4, 1fr)" // Creates a 4x4 grid layout for the dashboard
        gridAutoRows= "140px"
        gap="10px"
        flex="1"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <BadgeRoundedIcon
            sx={{ color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#ffffff"}
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
            fontSize={18}
            fontWeight={"bold"}
            >
            Model Name
          </Typography>
        </Box>

        </Box>
        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <TimerRoundedIcon
            sx={{color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#fff"}
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
            fontSize={18}
            fontWeight={"bold"}
            >
            Fatest Time
          </Typography>
        </Box>
        </Box>
        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <EmojiEventsIcon
            sx={{ color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#fff"}
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
            fontSize={18}
            fontWeight={"bold"}
            >
            Rewards Earned
          </Typography>
        </Box>
        </Box>
        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <DangerousIcon
            sx={{ color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#fff"}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            2
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={18}
            fontWeight={"bold"}
            >
            Off-Tracks
          </Typography>
        </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <EmojiEventsIcon
            sx={{ color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#fff"}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            1:00:23
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={18}
            fontWeight={"bold"}
            >
            Average Lap Time
          </Typography>
        </Box>
        </Box>

        <Box
          gridColumn="span 1"
          sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
          display="flex"
          borderRadius="5px"
        >
        <Box
          display="block"
          justifyContent="flex-start"
        >
          <EmojiEventsIcon
            sx={{ color: "#fff", fontSize: "26px", marginLeft:"30px", marginTop:"30px"}}
          />
          <Typography 
            variant="h3" 
            color={"#fff"}
            align="left"
            margin={30+"px"}
            marginBottom={0+"px"}
            marginTop={0+"px"}
            fontWeight="bold"
          >
            30
          </Typography>
          <Typography
            marginLeft={30+"px"}
            fontSize={18}
            fontWeight={"bold"}
            >
            Total Laps
          </Typography>
        </Box>
        </Box>

        {/* Row 3 */}
        <Box
          gridColumn="span 2"
          gridRow="span 3"
          borderRadius="5px"
          display="flex"
          flexDirection="column"
          sx={{backgroundImage: 'linear-gradient(to right, #672b74,#4d296d,#282441)'}}
        >
          <Box
            mt="25px"
            p="0 10px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={"#fff"}
              >
               Top 5
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={"#fff"}
              >
                Race Leaderboard
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.purpleAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="80vh" p="15px" flexGrow={1}>
            <DataGrid
              // initial state sorts datagrid by laptime
              initialState={{
                sorting: {sortModel: [{field: 'time', sort: 'asc',},],},
                pagination: {paginationModel:{pageSize: 5}},
              }}
              // disable filter and selector fields
              disableColumnFilter
              disableColumnSelector
              // set columns
              columns={columns}
              // set rows
              rows={rows}
              // hide pageination
              hideFooter
              slots={{}}
              slotProps={{
                toolbar: {
                },
              }}
            />
        </Box>
      </Box>

        <Box
          gridColumn="span 2"
          gridRow="span 2"
          sx={{backgroundImage: 'linear-gradient(to right, #672b74,#4d296d,#282441)'}}
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
          </Box>
          <MyComponent/>
          <Box>
          </Box>       
        </Box>
      </Box>
    </Box> 
  );
};

export default Dashboard;
