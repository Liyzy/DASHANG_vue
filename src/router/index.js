import Vue from 'vue'
import VueRouter from 'vue-router'
import registeP from '@/views/vendor_management/registeP.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/registeP',
    name: 'registeP',
    component: registeP
  },
]

const router = new VueRouter({
  routes
})

export default router
