import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import whiteListSlice from "./whiteListSlice";
import betAppSlice from "./betaAppSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    white: whiteListSlice,
    beta: betAppSlice,
  },
  devTools: true,
});

export default store;
