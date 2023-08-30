import { Box, Dialog, Typography, colors, useTheme } from "@mui/material";
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Button from '@mui/material/Button'; // Import Button component from MUI library
import DialogUI from '../leaderboard/dialog'


const Team = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const columns = [
    { field: "Position", headerName: "Position", flex:1},
    {
      field: "name",
      headerName: "Model Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "age", /*{change the field according to json data in the datamock file}*/
      headerName: "Time",
      type: "number",
      headerAlign: "justify",
      align: "justify",  
      flex: 2,
    },
    {
      field: "phone",
      headerName: "Gap To First",
      flex: 2,
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
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
