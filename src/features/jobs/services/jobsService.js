import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/jobs`;

export const fetchJobs = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch jobs');
  }
};

export const fetchJob = async (jobId) => {
  try {
    const response = await axios.get(`${API_URL}/${jobId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch job');
  }
};

export const fetchJobDetails = async (jobId) => {
  try {
    const response = await axios.get(`${API_URL}/${jobId}/details`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch job details');
  }
};

export const createJob = async (job) => {
  try {
    const response = await axios.post(API_URL, job, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create job');
  }
};

export const updateJob = async (jobId, job) => {
  try {
    const response = await axios.put(`${API_URL}/${jobId}`, job, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update job');
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await axios.delete(`${API_URL}/${jobId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete job');
  }
};

export const fetchEmployerJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/employer-jobs`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch employer jobs');
  }
};

export const fetchJobApplications = async (jobId) => {
  try {
    const response = await axios.get(`${API_URL}/${jobId}/applications`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch job applications');
  }
};

export const fetchAppliedJobs = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/applied-jobs?${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch applied jobs');
  }
};
