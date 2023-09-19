import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Button from '@mui/material/Button'; // Import Button component from MUI library
import DialogUI from '../leaderboard/dialog'


const Team = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const columns = [
    { 
      field: "position", 
      headerName: "Position", 
      flex:1, 
      headerAlign: "center",
      align: "center"
    },
    { 
      field: "teamName", 
      headerName: "Team Name", 
      flex:2, 
      headerAlign: "center",
      align: "center",
      valueOptions: ['team1','team3']
    },
    {
      field: "name",
      headerName: "Model Name",
      flex: 2,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "time",
      headerName: "Lap Time",
      flex: 2,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center"
    },
    {
      flex: 2,
      renderCell: (params) => {
        return (
          <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
              width: "60%",
              margin: "0 auto",
              padding: "5px",
              borderRadius: "4px",
              display: "flex",
              headerAlign: "center",
              align: "center"
            }}
            
            onClick={() => {
              setSelectedRowData(params.row); // Capture the selected row data
              setDialogOpen(true); // Open the dialog
            }} // Open the dialog on button click
          >
            <Typography
              color={colours.grey[100]}
              sx={{ marginLeft: "5px" }}
            >
              View Stats
            </Typography>
          </Button>
          <DialogUI
            open={dialogOpen}
            onClose={() => {
              setSelectedRowData(null); // Clear the selected row data
              setDialogOpen(false); // Close the dialog
            }} // Close the dialog
            rowData={selectedRowData}
          />
        </>
        );
      },
    },
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
      <Header title="LEADERBOARD" subtitle="Complete leaderboard" />
      <Box
        m="30px 0 0 0"
        height="calc(80vh - 115px)"
        sx={{
          "& .MuiDataGrid-root": {
            border: "solid",
            backgroundColor: colours.purpleAccent[700],
            fontSize: "20px",

          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            backgroundColor: "#FFA500",
            fontSize: "18px"
          },
          "& .name-column--cell": {
            color: colours.purpleAccent[800],
            fontSize: "18px",
            border: "none"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colours.purpleAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colours.purpleAccent[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colours.purpleAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colours.orangeAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
        disableColumnFilter
        disableColumnSelector
        // disableDensitySelector
        columns={columns}
        rows={rows}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
      </Box>
    </Box>
  );
};

export default Team;
