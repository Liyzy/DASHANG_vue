import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/user_management/login'
import register from '../views/user_management/register'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登录',
    component: login
  },
  {
    path: '/register',
    name: '注册',
    component: register
  }
];

const router = new VueRouter({
  routes
});

export default router
