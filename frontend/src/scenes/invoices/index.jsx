import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Home/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const[mockDataInvoices,setmockDataInvoices]=useState(null)

 const clientdata=async()=>{
   await axios.get('http://localhost:3001/clients').then((res)=>{
    setmockDataInvoices(res.data);
   })
 }
  useEffect(()=>{
    clientdata()
  },[])
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "",
      headerName: "Show Details "  ,
      flex: 1,
      renderCell: (params) => (
        <Link
          className="text-decoration-none"
          to= "/dashboard/cliendetails"
            state={{data:params.row}}
        
        >
          Show Details
        </Link> )}
    
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
            color: colors.greenAccent[300],
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
        }}
      >
        {
          mockDataInvoices?<DataGrid checkboxSelection
         rows={mockDataInvoices} 
         columns={columns} />
         :null
        }
        
      </Box>
    </Box>
  );
};

export default Invoices;
