import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:4322/', 
  baseURL:"https://backend-pf-production-ba15.up.railway.app/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;