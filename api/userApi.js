import axiosInstance from './axios';

// User login API call
export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/users/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User signup API call
export const signupUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch user profile API call
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/api/users/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
