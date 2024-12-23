import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createCompany, deleteCompany, fetchCompanies, fetchCompany, updateCompany } from '../services/companiesService';

export const getCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await fetchCompanies();
  return response.data;
});

export const getCompany = createAsyncThunk('companies/fetchCompany', async (companyId) => {
  const response = await fetchCompany(companyId);
  return response.data;
});

export const addCompany = createAsyncThunk('companies/addCompany', async (company) => {
  const response = await createCompany(company);
  return response.data;
});

export const editCompany = createAsyncThunk('companies/editCompany', async ({ companyId, company }) => {
  const response = await updateCompany(companyId, company);
  return response.data;
});

export const removeCompany = createAsyncThunk('companies/removeCompany', async (companyId) => {
  const response = await deleteCompany(companyId);
  return response.data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
    company: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload;
      })
      .addCase(addCompany.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.companies.push(action.payload);
      })
      .addCase(addCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editCompany.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCompany.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.companies.findIndex((company) => company._id === action.payload._id);
        if (index !== -1) {
          state.companies[index] = action.payload;
        }
      })
      .addCase(editCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeCompany.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = state.companies.filter((company) => company.id !== action.payload.id);
      })
      .addCase(removeCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default companiesSlice.reducer;