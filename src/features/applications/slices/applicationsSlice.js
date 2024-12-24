import { acceptApplication as acceptApplicationService, createApplication as createApplicationService, deleteApplication, fetchApplication, fetchApplications, rejectApplication as rejectApplicationService, updateApplication } from '../services/applicationsService';
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

export const acceptApplication = createAsyncThunk('applications/acceptApplication', async (applicationId, thunkAPI) => {
  try {
    console.log(applicationId);
    const response = await acceptApplicationService(applicationId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const rejectApplication = createAsyncThunk('applications/rejectApplication', async (applicationId, thunkAPI) => {
  try {
    const response = await rejectApplicationService(applicationId);
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
        state.applications = action.payload;
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
      .addCase(createApplication.fulfilled, (state) => {
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
      })
      .addCase(acceptApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(acceptApplication.fulfilled, (state, action) => {
        state.application = action.payload;
        state.loading = false;
      })
      .addCase(acceptApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(rejectApplication.pending, (state) => {
        state.loading = true;
      })
      .addCase(rejectApplication.fulfilled, (state, action) => {
        state.application = action.payload;
        state.loading = false;
      })
      .addCase(rejectApplication.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default applicationsSlice.reducer;