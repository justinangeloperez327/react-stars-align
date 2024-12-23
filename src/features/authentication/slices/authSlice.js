import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfile, login, register, registerEmployer } from '../services/authService';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await login(credentials);
  return response;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await register(userData);
  return response;
});

export const registerUserEmployer = createAsyncThunk('auth/registerEmployer', async (userData) => {
  const response = await registerEmployer(userData);
  return response;
});

export const getUserProfile = createAsyncThunk('auth/getProfile', async () => {
  const response = await getProfile();
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
    profile: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUserEmployer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserEmployer.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUserEmployer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, resetAuthState } = authSlice.actions;

export default authSlice.reducer;