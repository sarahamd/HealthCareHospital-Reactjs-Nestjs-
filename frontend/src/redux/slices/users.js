 import { createAsyncThunk } from "@reduxjs/toolkit";

 import { createSlice } from "@reduxjs/toolkit";
 import axios from "axios";
 import { jwtDecode } from "jwt-decode";
 import Cookies from "universal-cookie";

 export const getUserAction= createAsyncThunk(
     "user/getUserAction",
     async ()=>{
         const cookies =new Cookies()
         let jwt=cookies.get("x")
         const {data}=await axios.get(
            ` http://localhost:3001/clients`
         )
         return data[0];
        //  const {data}=await axios.get(
        //     ` http://localhost:3001/clients/${jwtDecode(jwt).user.id}`
        //  );
        //  return data[0];
     }
 )

 console.log("state.user")

 export const userSlice = createSlice({
     name: "users",
     initialState: { user: null },
     reducers: {
       resetUser: (state) => {
         state.user = null;
       },
       get: (state) => {
         state.user = {name:"sara"};
       },
     },
     extraReducers: (builder) => {
       builder.addCase(getUserAction.fulfilled, (state, action) => {
        //  console.log(state.user)
        //  console.log("state.user")
         state.user = action.payload;
       });
       builder.addCase(getUserAction.rejected, (state) => {
         state.user = null;
       });
     },
   });
  
   export const { resetUser ,get } = userSlice.actions; // Export the resetUser action
   export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice=createSlice({
//   name:'users',
//   initialState:{users:[]},
//   reducers:{
//     resetUser: (state) => {
//               state.users = null;
//             },
//     getUser: async (state)=> {
//       const cookies =new Cookies()
//               let jwt=cookies.get("x")
//               console.log("jwt")
//       const {data}= await axios.get(
//                    ` http://localhost:3001/clients/${jwtDecode(jwt).user.id}`
//                 );
//                 console.log("data in slice", data)
//                 state.users=data     

//     } 
//   }
// })

// export const {getUser,resetUser }=userSlice.actions;
// export default userSlice.reducer;