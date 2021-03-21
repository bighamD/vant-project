import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      needTabbar: false
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/register.vue')
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
    component: () => import(/* webpackChunkName: "login" */ '../views/login/reset-password.vue')
  },
  {
    path: '/gen-qrcode',
    name: 'GenQRcode',
    component: () => import(/* webpackChunkName: "login" */ '../views/gen-qrcode/index.vue')
  },
  {
    path: '/qrcode',
    name: 'QRcode',
    component: () => import(/* webpackChunkName: "login" */ '../views/qrcode/index.vue')
  },
  {
    path: '/order-list',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "login" */ '../views/order-list/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
