import "normalize.css/normalize.css";
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "./style/global.less";
import "./perssion";
import 'weixin-js-sdk'
import axios from 'axios'

Vue.use(Vant);
Vue.config.productionTip = false;


router.beforeEach(async (to, from, next) => {
  const {data} = await axios({
    url: 'http://localhost:3000/sign',
    type: 'get',
    params: {
      uri: location.href
    }
  })
  // console.log(data)
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx4a1a4e98529c0b34', // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature,// 必填，签名
    jsApiList: ['chooseImage', 'getLocation'] // 必填，需要使用的JS接口列表
  });

  // wx.ready(function(){
  //   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  // })
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state.userInfo,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(store.state));
    });
  }
}).$mount("#app");
