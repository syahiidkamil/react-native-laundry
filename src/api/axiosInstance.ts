import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/v1',
});

axiosInstance.defaults.timeout = 1500;

export default axiosInstance;
