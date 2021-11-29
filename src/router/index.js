import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'
import HammayounSaficv from '@/views/HammayounSaficv.vue'
import PersonalProfile from '@/components/PersonalProfile'
import Contact from '@/components/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'personal-profile',
        name: 'PersonalProfile',
        component: PersonalProfile
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      }
    ]
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
