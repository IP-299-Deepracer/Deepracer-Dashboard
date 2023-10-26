import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Button from '@mui/material/Button'; // Import Button component from MUI library
import DialogUI from '../leaderboard/dialog';


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
      field: "modelName",
      headerName: "Model Name",
      flex: 2,
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: "modelTime",
      headerName: "Lap Time",
      flex: 2,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
      disableColumnMenu: true
    },
    {
      flex: 2,
      renderCell: (params) => {
        return (
          <>
          <Button
            variant="contained"
            sx={{backgroundImage: 'linear-gradient(to right, #7e348d,#282441)'}}
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
              color={"#fff"}
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
      <Header title="LEADERBOARD"/>
      <Box
        m="30px 0 0 0"
        height="calc(80vh - 115px)"
        sx={{
          "& .MuiDataGrid-root": {
            border: "solid",
            borderColor: "#ff9900",
            fontSize: "20px",
            borderRadius: "5px"

          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            backgroundColor: "#5b2c7c",
            fontSize: "18px"
          },
          "& .name-column--cell": {
            fontSize: "18px",
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#232f3e",
            borderBottom: "none",
            color: "#fff",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#232f3e",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#232f3e",
            color: "#fff",
          },
          "& .MuiCheckbox-root": {
            backgroundImage: 'linear-gradient(to right, #7e348d,#282441) !important',
          },
        }}
      >
        <DataGrid
        // initial state sorts datagrid by laptime
        initialState={{
          sorting: {sortModel: [{field: 'time', sort: 'asc',},],},
          pagination: {paginationModel:{pageSize: 100}},
        }}
        // disable filter and selector fields
        disableColumnFilter
        disableColumnSelector
        // set columns
        columns={columns}
        // set rows
        rows={rows}
        // add grid toolbar
        slots={{ toolbar: GridToolbar }}
        // add quick filter
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
