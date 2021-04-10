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
    path: '/open',
    name: 'Open',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/open.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/file-upload.vue')
  },
  {
    path: '/bind-card',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/bind-card.vue')
  },
  {
    path: '/open-nav',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/index.vue')
  },
  {
    path: '/upgrade',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/upgrade.vue')
  },
  {
    path: '/transform',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/transform.vue')
  },
  {
    path: '/balance',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/balance.vue')
  },
  {
    path: '/unbind',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/unbind.vue')
  },
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "order-list" */ '../views/open-account/account.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
