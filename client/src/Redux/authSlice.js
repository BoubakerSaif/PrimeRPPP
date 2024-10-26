import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  cookies: localStorage.getItem("userCookies")
    ? JSON.parse(localStorage.getItem("userCookies"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    clearCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setCoockies: (state, action) => {
      state.cookies = action.payload;
      localStorage.setItem("userCookies", JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials, clearCredentials, setCoockies } =
  authSlice.actions;

export default authSlice.reducer;
