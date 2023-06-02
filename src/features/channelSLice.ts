import { createSlice } from "@reduxjs/toolkit";
interface ChannelState {
  channel:null | string;
  channNmae:null | string;
}
const initialState:ChannelState ={
  channel:null,
  channNmae:null
}
const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers:{
    setchannel:(state,action)=>{
      console.log(action)
      state.channel=action.payload.channel;
      state.channNmae=action.payload.channNmae;
    },
    logout:(state)=>{
    }
  }
})
export const {setchannel} = channelSlice.actions;
export default channelSlice.reducer;