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
import "@/const";
import { isIOS } from "@/utils/platform";
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign({}, JSON.parse(localStorage.getItem("store")))
      );
    }
    if (isIOS) {
      //在页面刷新时将vuex里的信息保存到缓存里
      window.addEventListener("pagehide", () => {
        localStorage.setItem("store", JSON.stringify(this.$store.state));
      });
    } else {
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("store", JSON.stringify(this.$store.state));
      });
    }
  }
}).$mount("#app");
