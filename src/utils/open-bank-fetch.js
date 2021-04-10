import axios from 'axios';
import { getToken } from '@/utils/auth';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const service = axios.create({
    baseURL: 'http://22.16.25.134:8088/market/applet/maxka',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [function (data, headers) {
        // 对 data 进行任意转换处理
        console.log(data, headers)
        if (!data) return ;
        if (!headers['Content-Type'].includes('x-www-form-urlencoded')) {
            return JSON.stringify(data)
        }
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        })
        return formData;
    }],
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
