import fetchData from '../utils/fetch';

export const register = (params = {}) => {
  return fetchData({
    params,
    url: '/education/user/register',
    method: 'post'
  });
};

export const login = (params = {}) => {
  return fetchData({
    params,
    method: 'post',
    url: '/education/user/login'
  });
};

export const resetPassword = (params = {}) => {
  return fetchData({
    url: '/education/user/rest_pwd',
    params,
    method: 'post'
  });
};

export const sendMsg = (params = {}) => {
  return fetchData({
    method: 'get',
    params,
    url: '/education/user/send_sms'
  });
};

export const getOfficialList = (params = {}) => {
  return fetchData({
    method: 'get',
    params,
    url: '/education/user/office_list'
  });
};

export const saveOrder = (params = {}) => {
  return fetchData({
    method: 'post',
    data: params,
    url: '/education/order/save'
  });
};

export const getOrderList = (params = {}, options = {loading: false}) => {
  return fetchData({
    method: 'get',
    params,
    options,
    url: '/education/order/data'
  });
};

export const getOrderDetail = (params = {}) => {
  return fetchData({
    method: 'post',
    data: params,
    url: '/education/order/detail'
  });
};

export const getQRcode = (params = {}) => {
  return fetchData({
    method: 'get',
    params,
    url: '/education/order/qr_code'
  });
};
