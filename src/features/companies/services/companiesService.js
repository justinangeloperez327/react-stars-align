import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/companies`;

export const fetchCompanies = async (query = '') => {
  try {
    const response = await axios.get(`${API_URL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch companies');
  }
};

export const fetchCompany = async (companyId) => {
  try {
    const response = await axios.get(`${API_URL}/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch company');
  }
};

export const createCompany = async (company) => {
  try {
    const response = await axios.post(API_URL, company, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create company');
  }
};

export const updateCompany = async (companyId, company) => {
  try {
    const response = await axios.put(`${API_URL}/${companyId}`, company, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update company');
  }
};

export const deleteCompany = async (companyId) => {
  try {
    const response = await axios.delete(`${API_URL}/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete company');
  }
};