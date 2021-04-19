export const getUrlParams = url => {
  const serach = url.split('?')[1];

  const matches = serach.split('&');
  return matches.reduce((ret, curr) => {
    const [key, value] = curr.split('=');
    ret[key] = value.replace('#/wxpay', '');
    return ret;
  }, {});
};
