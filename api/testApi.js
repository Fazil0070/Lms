import axiosInstance from './axios';

// Create test API call
export const createTest = async (testData) => {
  try {
    const response = await axiosInstance.post('/api/tests/create', testData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch tests API call
export const getTests = async () => {
  try {
    const response = await axiosInstance.get('/api/tests');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch single test API call
export const getTest = async (testId) => {
  try {
    const response = await axiosInstance.get(`/api/tests/${testId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
