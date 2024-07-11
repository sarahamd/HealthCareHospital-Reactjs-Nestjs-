import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataGrid } from '@mui/x-data-grid';
const Index = () => {
  const location=useLocation()
  const[clientdata,setclientdata]=useState(null)
  const[data,setdata]=useState(null)
  useEffect(() => {
    if (location.state && location.state.data) {
      setdata(location.state.data)
      setclientdata(location.state.data.booking.map((booking, index) => ({
        ...booking,
        _id: booking._id || `temp-id-${index}`
      })));
    }
  }, [location.state]);



  const columns = [
   
        {
          field: "doctor",
          headerName: "Doctor",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "date",
          headerName: "Date",
          flex: 1,
          cellClassName: "name-column--cell",
          
        },
        {
          field: "hours",
          headerName: " hours",
          flex: 1,
        },
        {
          field: "price",
          headerName: "price",
          flex: 1,
        },
       
      
        
      ];

    return (
   


       <>     
<div >
  <h3 className='text-center m-3'>Paitent Name is {data?.name}</h3>
{
          clientdata?<DataGrid checkboxSelection
          // getRowId={(row) => row.id}
                  rows={clientdata} 

          getRowId={(row) => row._id }

         columns={columns} />
         :null
        }
        <div  className='text-center m-5' >
 <Link to="/dashboard/invoices" >
        <ArrowBackIcon style={{fontSize:"30px" ,color:'white'}}/>
        </Link>
        </div >
       
</div>
      </>
    );
}

export default Index;


// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// // import { mockDataInvoices } from "../../data/mockData";
// import Header from "../../components/Home/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Invoices = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const[mockDataInvoices,setmockDataInvoices]=useState(null)

//  const clientdata=async()=>{
//    await axios.get('http://localhost:3001/clients').then((res)=>{
//     setmockDataInvoices(res.data);
//    })
//  }
//   useEffect(()=>{
//     clientdata()
//   },[])
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "details",
//       headerName: "details",
//       flex: 1,
//       cellClassName: "name-column--cell",
      
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "",
//       headerName: "",
//       flex: 1,
//       renderCell: (params) => (
//         <Link
//           className="text-decoration-none"
//           to= "/dashboard/cliendetails"
//             state={{data:params.row}}
        
//         >
//           Show Details
//         </Link> )}
    
//   ];

//   return (
//     <Box m="20px">
//       <Header title="INVOICES" subtitle="List of Invoice Balances" />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[700],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         {
//           mockDataInvoices?<DataGrid checkboxSelection
//          rows={mockDataInvoices} 
//          columns={columns} />
//          :null
//         }
        
//       </Box>
//     </Box>
//   );
// };

// export default Invoices;
