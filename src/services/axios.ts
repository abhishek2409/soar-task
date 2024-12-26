import axios from 'axios';
import { debugLog } from './logger';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    debugLog(`Request: ${config.method?.toUpperCase()} ${config.url}`, config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    debugLog('Response:', response);
    return response;
  },
  (error) => {
    debugLog('Error Response:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
