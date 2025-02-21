import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.api.syncremote.co/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;