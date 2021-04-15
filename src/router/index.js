import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      needTabbar: false
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/login/register.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      needTabbar: false
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    meta: {
      needTabbar: false
    },
    component: () => import(/* webpackChunkName: "reset-password" */ '../views/login/reset-password.vue')
  },
  {
    path: '/gen-qrcode',
    name: 'GenQRcode',
    component: () => import(/* webpackChunkName: "gen-qrcode" */ '../views/gen-qrcode/index.vue')
  },
  {
    path: '/qrcode',
    name: 'QRcode',
    component: () => import(/* webpackChunkName: "qrcode" */ '../views/qrcode/index.vue')
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/order-list/index.vue')
  },
  {
    path: '/wx-pay',
    name: 'Wxpay',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/wx-pay/index.vue')
  },

];

const router = new VueRouter({
  routes
});

export default router;
