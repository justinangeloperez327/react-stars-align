import applicationsReducer from '@features/applications/slices/applicationsSlice';
import authReducer from '@features/authentication/slices/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '@features/dashboard/slices/dashboardSlice';
import jobsReducer from '@features/jobs/slices/jobsSlice';
import profileReducer from '@features/profile/slices/profileSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    auth: authReducer,
    applications: applicationsReducer,
    profile: profileReducer,
    dashboard: dashboardReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});