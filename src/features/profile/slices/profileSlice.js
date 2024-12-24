import {
  addEducation as addEducationService,
  addExperience as addExperienceService,
  deleteEducation as deleteEducationService,
  deleteExperience as deleteExperienceService,
  getEducation,
  getExperience,
  getProfile,
  updateEducation as updateEducationService,
  updateExperience as updateExperienceService,
  updatePassword as updatePasswordService,
  updateProfile as updateProfileService
} from '../services/profileService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, thunkAPI) => {
  try {
    const response = await getProfile();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updatePassword = createAsyncThunk('profile/updatePassword', async (passwordData, thunkAPI) => {
  try {
    const response = await updatePasswordService(passwordData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateProfile = createAsyncThunk('profile/updateProfile', async (profileData, thunkAPI) => {
  try {
    const response = await updateProfileService(profileData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEducation = createAsyncThunk('profile/fetchEducation', async (_, thunkAPI) => {
  try {
    const response = await getEducation();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addEducation = createAsyncThunk('profile/addEducation', async (educationData, thunkAPI) => {
  try {
    const response = await addEducationService(educationData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateEducation = createAsyncThunk('profile/updateEducation', async (educationData, thunkAPI) => {
  try {
    const response = await updateEducationService(educationData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteEducation = createAsyncThunk('profile/deleteEducation', async (educationId, thunkAPI) => {
  try {
    const response = await deleteEducationService(educationId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchExperience = createAsyncThunk('profile/fetchExperience', async (_, thunkAPI) => {
  try {
    const response = await getExperience();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addExperience = createAsyncThunk('profile/addExperience', async (experienceData, thunkAPI) => {
  try {
    const response = await addExperienceService(experienceData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateExperience = createAsyncThunk('profile/updateExperience', async (experienceData, thunkAPI) => {
  try {
    const response = await updateExperienceService(experienceData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteExperience = createAsyncThunk('profile/deleteExperience', async (experienceId, thunkAPI) => {
  try {
    const response = await deleteExperienceService(experienceId);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    education: [],
    experience: [],
    skills: [],
    appliedJobs: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.education = action.payload.profile.education;
        state.experience = action.payload.profile.experience;
        state.skills = action.payload.profile.skills;
        state.appliedJobs = action.payload.appliedJobs;
        state.loading = false
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.education = action.payload;
        state.loading = false;
      })
      .addCase(addEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEducation.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEducation.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEducation.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.experience = action.payload;
        state.loading = false;
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExperience.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExperience.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExperience.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;