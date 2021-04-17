import axios from 'axios';
import { getToken, removeToken } from '@/utils/auth';
import { Dialog, Toast } from 'vant';
import router from '../router/index';

const timeout = 10 * 1000;
const IS_DEV = process.env.NODE_ENV === 'development';
const baseURL = IS_DEV ? '' : process.env.VUE_APP_BASE_API;

const service = axios.create({
  baseURL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout
});

service.interceptors.request.use(
  config => {
    if (!config.options || config.options?.loading !== false) {
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
        removeToken();
        return router.push({
          path: 'login',
          query: {
            t: Date.now()
          }
        });
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
