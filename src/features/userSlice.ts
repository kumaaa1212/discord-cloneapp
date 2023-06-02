import { createSlice } from "@reduxjs/toolkit";
export interface UserState {
  user:null | {
    uid:string,
    photo:string,
    email:string,
    displayName:string
  }
}
const initialState:UserState = { user:null }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    login:(state,action)=>{
      state.user=action.payload
    },
    logout:(state)=>{
      state.user=null
    }
  }
})
console.log(userSlice);
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;