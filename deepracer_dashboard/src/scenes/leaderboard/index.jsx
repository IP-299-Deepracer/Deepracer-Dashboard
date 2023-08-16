import { Box, Typography, colors, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const columns = [
    { field: "Position", headerName: "Position", flex:1,},
    {
      field: "name",
      headerName: "Model Name",
      flex: 2,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Time",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 2,
    },
    {
      field: "phone",
      headerName: "Gap To First",
      flex: 2,
    },
    {
      flex: 2,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            backgroundColor={
              access === "admin"
                ? colours.greenAccent[600]
                : access === "manager"
                ? colours.greenAccent[700]
                : colours.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colours.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="LEADERBOARD" subtitle="Complete leaderboard" />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
