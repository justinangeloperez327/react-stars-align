import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/dashboard`;

export const fetchDashboard = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch dashboard');
  }
}
