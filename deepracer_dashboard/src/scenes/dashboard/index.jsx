import { Box, Button, IconButton, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import TrafficIcon from "@mui/icons-material/Traffic";
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";
import Track from "../../assets/track.png"
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import RMIT from "../../assets/aws.png";
import AWS from "../../assets/rmit.png"
import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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
      disableColumnMenu: true
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
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title=" DEEPRACER DASHBOARD" />

        <Box>
          <Button
            sx={{
              backgroundColor: "#f79400",
              color: "#FFFFFF",
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
          backgroundColor={"#f79400"}
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
          backgroundColor={"#f79400"}
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
          backgroundColor={"#f79400"}
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
          backgroundColor={"#f79400"}
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
          backgroundColor={"#f79400"}
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
              hideFooter
              // add quick filter
              slotProps={{
              }}
            />
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
