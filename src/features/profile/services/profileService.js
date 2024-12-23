import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/users/profile`;

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export const updateProfile = async (profileData) => {
  const response = await axios.put(`${API_URL}`, profileData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}

export const updatePassword = async (userId, passwordData) => {
  const response = await axios.put(`${API_URL}`, passwordData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}
