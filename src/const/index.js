export const APPID = 'wx6b7afa83a0cd7c0e';

const REDIRECT_URI = encodeURIComponent(window.location.href);

export const WX_AUTH_URI = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_base&state=1234&connect_redirect=1#wechat_redirect`
console.log(WX_AUTH_URI)