import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import channelSLice from "./features/channelSLice";

const store = configureStore({
  reducer: {
    user: userSlice,
    channel: channelSLice,
  },
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;