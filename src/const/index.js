export const APPID = 'wx6b7afa83a0cd7c0e';

export const WX_AUTH_URI = (uri, state) => `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${encodeURIComponent(uri)}&response_type=code&scope=snsapi_base&state=${state}&connect_redirect=1#wechat_redirect`