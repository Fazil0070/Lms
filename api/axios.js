import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Base URL of your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
