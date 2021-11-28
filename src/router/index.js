import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'
import MyCv from '@/views/MyCv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hammayoun-safi-cv',
    name: 'MyCv',
    component: MyCv
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
