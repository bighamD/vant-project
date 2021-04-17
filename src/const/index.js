export const APPID = 'wx6b7afa83a0cd7c0e';

export const redirect_uri =  encodeURIComponent(process.env.VUE_APP_REDIRECT_API);

export const WX_AUTH_URI = (state) => `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`
