import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/auth`;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to login');
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to register');
  }
};

export const registerEmployer = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register-employer`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to register');
  }
};

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return response.data;
  }
  catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get profile');
  }

};

export const logout = () => {
  localStorage.removeItem('token');
};