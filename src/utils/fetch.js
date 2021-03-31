import axios from 'axios';
import { getToken } from '@/utils/auth';
import { Dialog, Toast } from 'vant';
import router from '../router/index';

const timeout = 10 * 1000;

const service = axios.create({
  // baseURL: 'http://8.136.232.173/education/a',
  // baseURL: 'http://116.62.161.102/education/a',
  // baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  timeout,
});

service.interceptors.request.use(
  config => {
    if (config.options?.loading !== false) {
      Toast.loading({
        forbidClick: true,
        message: '加载中...',
        duration: timeout
      });
    }
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
      if (res.errorCode === '401') {
        return router.push({
          path: 'login',
        })
      }
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
