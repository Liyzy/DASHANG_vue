import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/task_management/home.vue';
import login from '../views/user_management/login';
import register from '../views/user_management/register';
import registeP from '../views/vendor_management/registeP.vue';
import mail_main from "../views/mail_management/mail_main";
import modifyInfo from "../views/user_management/modifyInfo";
import userHome from "../views/task_management/page/user/userHome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登录',
    component: login,
    meta:{
      title:"大商电器代理服务平台-登录"
    }
  },
  {
    path: '/register',
    name: '注册',
    component: register
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/registeP',
    name: 'registeP',
    component: registeP
  },
  {
    path: '/mail',
    name: 'mail_main',
    component: mail_main
  },
  {
    path: '/modifyInfo',
    name: 'modifyInfo',
    component: modifyInfo
  },
  {
    path: '/userHome',
    name: 'userHome',
    component: userHome
  }
]

const router = new VueRouter({
  routes
})

export default router
