import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Ganti dengan URL backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
