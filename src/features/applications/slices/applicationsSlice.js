import { createApplication as createApplicationService, deleteApplication, fetchApplication, fetchApplications, updateApplication } from '../services/applicationsService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getApplications = createAsyncThunk('applications/getApplications', async (_, thunkAPI) => {
  try {
    const response = await fetchApplications();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const getApplication = createAsyncThunk('applications/getApplication', async (applicationId, thunkAPI) => {
  try {
    const response = await fetchApplication(applicationId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const createApplication = createAsyncThunk('applications/addApplication', async (application, thunkAPI) => {
  try {
    const response = await createApplicationService(application);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const editApplication = createAsyncThunk('applications/editApplication', async ({ applicationId, application }, thunkAPI) => {
  try {
    const response = await updateApplication(applicationId, application);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const removeApplication = createAsyncThunk('applications/removeApplication', async (applicationId, thunkAPI) => {
  try {
    const response = await deleteApplication(applicationId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    application: {},
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    resetApplicationsState: (state) => {
      state.loading = false;
      state.error = null;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getApplications.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApplications.fulfilled, (state, action) => {
        state.applications = action.payload.applications;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
      })
      .addCase(getApplications.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApplication.fulfilled, (state, action) => {
        state.application = action.payload;
        state.loading = false;
      })
      .addCase(getApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(editApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(editApplication.fulfilled, (state, action) => {
        state.application = action.payload;
        state.loading = false;
      })
      .addCase(editApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(removeApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeApplication.fulfilled, (state, action) => {
        state.applications = state.applications.filter((application) => application._id !== action.payload._id);
        state.loading = false;
      })
      .addCase(removeApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default applicationsSlice.reducer;