import axios from 'axios';
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: 'http://116.62.161.102/education/a',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
