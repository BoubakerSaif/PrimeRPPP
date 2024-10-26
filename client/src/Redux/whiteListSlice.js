import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createWhiteList = createAsyncThunk(
  "whiteApp/create",
  async (whiteList) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACK_URL}/api/whiteApp`,
        whiteList
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const whiteAppSlice = createSlice({
  name: "WhiteApp",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createWhiteList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createWhiteList.fulfilled, (state, action) => {
      state.loading = false;
      state.createdWhiteApp = action.payload;
    });
    builder.addCase(createWhiteList.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default whiteAppSlice.reducer;
