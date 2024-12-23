import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/applications`;

export const fetchApplications = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch company applicants');
  }
};

export const fetchApplication = async (applicantId) => {
  try {
    const response = await axios.get(`${API_URL}/${applicantId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch applicant');
  }
};

export const createApplication = async (application) => {
  try {
    const response = await axios.post(`${API_URL}`, application, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create application');
  }
};

export const updateApplication = async (applicationId, application) => {
  try {
    const response = await axios.put(`${API_URL}/${applicationId}`, application, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update application');
  }
};

export const deleteApplication = async (applicationId) => {
  try {
    const response = await axios.delete(`${API_URL}/${applicationId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete application');
  }
};
