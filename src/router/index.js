import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/jc',
    name: 'jc',
    component: () => import('../components/jc.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
