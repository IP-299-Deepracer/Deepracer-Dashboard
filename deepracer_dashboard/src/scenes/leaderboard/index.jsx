import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Button from '@mui/material/Button'; // Import Button component from MUI library
import DialogUI from '../leaderboard/dialog'


const Team = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const columns = [
    { field: "Position", headerName: "Position", flex:1, headerAlign: "center",
      align: "center"},
    {
      field: "name",
      headerName: "Model Name",
      flex: 2,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center"
    },
    {
      field: "Time", /*{change the field according to json data in the datamock file}*/
      headerName: "Time",
      type: "number",
      headerAlign: "center",
      align: "center",  
      flex: 2,
    },
    {
      field: "GapToFirst",
      headerName: "Gap To First",
      flex: 2,
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
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
