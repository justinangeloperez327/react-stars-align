// filepath: /d:/Projects/mern/job-board-platform/frontend/src/features/jobs/slices/jobsSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createJob as createJobService, deleteJob, fetchAppliedJobs, fetchEmployerJobs, fetchJob, fetchJobApplications, fetchJobDetails, fetchJobs, updateJob } from '../services/jobsService';

export const getJobs = createAsyncThunk('jobs/getJobs', async (query, thunkAPI) => {
  try {
    const response = await fetchJobs(query);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getJob = createAsyncThunk('jobs/getJob', async (jobId, thunkAPI) => {
  try {
    const response = await fetchJob(jobId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getJobDetails = createAsyncThunk('jobs/getJobDetails', async (jobId, thunkAPI) => {
  try {
    const response = await fetchJobDetails(jobId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createJob = createAsyncThunk('jobs/addJob', async (jobData, thunkAPI) => {
  try {
    const response = await createJobService(jobData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editJob = createAsyncThunk('jobs/editJob', async ({ jobId, jobData }, thunkAPI) => {
  try {
    const response = await updateJob(jobId, jobData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeJob = createAsyncThunk('jobs/removeJob', async (jobId) => {
  await deleteJob(jobId);
  return jobId;
});

export const getEmployerJobs = createAsyncThunk('jobs/getEmployerJobs', async ({ page, limit }, thunkAPI) => {
  try {
    const response = await fetchEmployerJobs(page, limit);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getJobApplications = createAsyncThunk('jobs/getJobApplications', async (jobId, thunkAPI) => {
  try {
    const response = await fetchJobApplications(jobId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAppliedJobs = createAsyncThunk('jobs/getAppliedJobs', async ({ page, limit }, thunkAPI) => {
  try {
    const response = await fetchAppliedJobs(page, limit);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    job: null,
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    filters: {
      search: '',
      type: '',
      location: '',
      dateListed: '',
    },
  },
  reducers: {
    resetJobsState: (state) => {
      state.loading = false;
      state.error = null;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.job = action.payload;
        state.loading = false;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.jobs.findIndex((job) => job._id === action.payload._id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })
      .addCase(editJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEmployerJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployerJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.jobs;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.currentPage;
      })
      .addCase(getEmployerJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getJobApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getJobApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.job.applicants = action.payload;
      })
      .addCase(getJobApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAppliedJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppliedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.jobs;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.currentPage;
      })
      .addCase(getAppliedJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getJobDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getJobDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
      })
      .addCase(getJobDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters } = jobsSlice.actions;

export default jobsSlice.reducer;