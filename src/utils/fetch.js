import axios from 'axios';
import { getToken } from '@/utils/auth';
import { Dialog, Toast } from 'vant';

const timeout = 10 * 1000;

const service = axios.create({
  // baseURL: 'http://116.62.161.102/education/a',
  withCredentials: true, // send cookies when cross-domain requests
  timeout,
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

service.interceptors.request.use(
  config => {
    Toast.loading({
      forbidClick: true,
      message: '加载中...',
      duration: timeout
    });
    const token = getToken();
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  error => {
    Toast.clear();
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data;
    if (res.success === false) {
      Dialog.confirm({
        message: res.msg
      });
    }
    return res;
  },
  error => {
    Toast.clear();
    return Promise.reject(error);
  }
);

export default service;
