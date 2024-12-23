import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfile, updatePassword as updatePasswordService, updateProfile as updateProfileService } from '../services/profileService';

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

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
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
        state.loading = false
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message;
      });
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;