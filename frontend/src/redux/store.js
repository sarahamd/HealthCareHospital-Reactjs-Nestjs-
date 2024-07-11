import { configureStore } from '@reduxjs/toolkit';
import users from './slices/users';
//  import usersReducer from './slice/users'
// import  { userSlice } from "./slice"

const store = configureStore({
  reducer: {
  user:users
   
  },
});
export default store;


