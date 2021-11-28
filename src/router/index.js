import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'
import HammayounSaficv from '@/views/HammayounSaficv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hammayoun-safi-cv',
    name: 'HammayounSaficv',
    component: HammayounSaficv
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
