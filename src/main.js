import 'normalize.css/normalize.css';
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';
import './style/global.less';
import './perssion';

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
