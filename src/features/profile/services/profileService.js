import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/profile`;

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
  try {
    const response = await axios.put(`${API_URL}`, profileData, {
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

export const updatePassword = async (passwordData) => {
  try {
    const response = await axios.put(`${API_URL}/update-password`, passwordData, {
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

export const getEducation = async () => {
  try {
    const response = await axios.get(`${API_URL}/education`, {
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

export const addEducation = async (educationData) => {
  try {
    const response = await axios.post(`${API_URL}/education`, educationData, {
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

export const updateEducation = async (educationData) => {
  try {
    const response = await axios.put(`${API_URL}/education/${educationData.id}`, educationData, {
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

export const deleteEducation = async (educationId) => {
  try {
    const response = await axios.delete(`${API_URL}/education/${educationId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: { educationId },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export const getExperience = async () => {
  try {
    const response = await axios.get(`${API_URL}/experience`, {
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

export const addExperience = async (experienceData) => {
  try {
    const response = await axios.post(`${API_URL}/experience`, experienceData, {
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

export const updateExperience = async (experienceId, experienceData) => {
  try {
    const response = await axios.put(`${API_URL}/experience/${experienceId}`, experienceData, {
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

export const deleteExperience = async (experienceId) => {
  try {
    const response = await axios.delete(`${API_URL}/experience/${experienceId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: { experienceId },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

