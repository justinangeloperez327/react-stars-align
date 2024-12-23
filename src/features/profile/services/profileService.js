import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/profile`;

// Get user profile
const getProfile = async () => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}


// Update User Profile
const updateProfile = async (profileData) => {
  const response = await axios.put(`${API_URL}`, profileData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}

// Update User Password
const updatePassword = async (userId, passwordData) => {
  const response = await axios.put(`${API_URL}`, passwordData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}

const profileService = {
  getProfile,
  updateProfile,
  updatePassword,
};

export default profileService;