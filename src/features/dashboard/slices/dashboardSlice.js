import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchDashboard } from '../services/dashboardService';

export const getDashboardData = createAsyncThunk('dashboard/getDashboardData', async (query, thunkAPI) => {
  try {
    const response = await fetchDashboard(query);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    loading: false,
    error: null,
    totalJobs: 0,
    totalActiveJobs: 0,
    totalCloseJobs: 0,
    totalApplications: 0,
    totalAccepted: 0,
    totalRejected: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.totalJobs = action.payload.totalJobs;
        state.totalActiveJobs = action.payload.totalActiveJobs;
        state.totalCloseJobs = action.payload.totalCloseJobs;
        state.totalApplications = action.payload.totalApplications;
        state.totalAccepted = action.payload.totalAccepted;
        state.totalRejected = action.payload.totalRejected;
        state.loading = false;
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default dashboardSlice.reducer;