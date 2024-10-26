import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBetaApp = createAsyncThunk(
  "beta/create",
  async (betaApp) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACK_URL}/api/betaApp`,
        betaApp
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllBetaApps = createAsyncThunk(
  "beta/getAll",
  async (betaApp) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/api/betaApp`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getmyBetaApp = createAsyncThunk("beta/myBetaApp", async () => {
  try {
    axios.defaults.withCredentials = true;

    const { data } = await axios.get(
      // "localhost/betaApp/myapp"
      `${import.meta.env.VITE_BACK_URL}/api/betaApp/myapp`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const acceptBetaApp = createAsyncThunk("beta/acceptApp", async (id) => {
  try {
    axios.defaults.withCredentials = true;

    const { data } = await axios.put(
      `${import.meta.env.VITE_BACK_URL}/api/betaApp/accept/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const rejectBetaApp = createAsyncThunk("beta/rejectApp", async (id) => {
  try {
    axios.defaults.withCredentials = true;

    const { data } = await axios.put(
      `${import.meta.env.VITE_BACK_URL}/api/betaApp/reject/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const betaAppSlice = createSlice({
  name: "beta",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createBetaApp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBetaApp.fulfilled, (state, action) => {
      state.loading = false;
      state.createdBetaApp = action.payload;
    });
    builder.addCase(createBetaApp.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////////////////
    builder.addCase(getAllBetaApps.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBetaApps.fulfilled, (state, action) => {
      state.loading = false;
      state.betaApps = action.payload;
    });
    builder.addCase(getAllBetaApps.rejected, (state) => {
      state.loading = false;
    });
    //////////////////////////////////////////////////////////
    builder.addCase(acceptBetaApp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(acceptBetaApp.fulfilled, (state, action) => {
      state.loading = false;
      state.acceptedApp = action.payload;
    });
    builder.addCase(acceptBetaApp.rejected, (state) => {
      state.loading = false;
    });
    //////////////////////////////////////////////////////////
    builder.addCase(rejectBetaApp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(rejectBetaApp.fulfilled, (state, action) => {
      state.loading = false;
      state.rejectedApp = action.payload;
    });
    builder.addCase(rejectBetaApp.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////////////////////
    builder.addCase(getmyBetaApp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getmyBetaApp.fulfilled, (state, action) => {
      state.loading = false;
      state.myBetaApp = action.payload;
    });
    builder.addCase(getmyBetaApp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default betaAppSlice.reducer;
