import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Home/Header";
import { useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
const[mockDataContacts,setmockDataContacts]=useState(null)

  const doctordata= async ()=>{
    await axios.get('http://localhost:3001/doctors').then((res)=>{
      setmockDataContacts(res?.data);
        })
}
  useEffect(()=>{
    doctordata()
  },[])

  const columns = [
    { field: "id", headerName: "id", flex: 0.3 },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "department",
      headerName: "department",
      flex: 1,
    },
    {
      field: "price",
      headerName: "price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
   
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
    },
    {
      field: "available_date",
      headerName: "available_date",
      flex: 1,
    },
    {
      field: "available_hour",
      headerName: "available_hour",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for doctors"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[600],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[700],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
       
  
       {mockDataContacts?
       ( <DataGrid
      
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />):null
      } 
      </Box>
    </Box>
  );
};

export default Contacts;
