import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'
import HammayounSaficvEn from '@/views/myCV/HammayounSaficvEn.vue'
import HammayounSaficvFr from '@/views/myCV/HammayounSaficvFr.vue'
import PersonalProfile from '@/components/PersonalProfile'
import ExperienceAndEducation from '@/components/ExperienceAndEducation'
import Contact from '@/components/Contact'
import Skill from '@/components/Skill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'PersonalProfile',
        component: PersonalProfile
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'experience-education',
        name: 'ExperienceAndEducation',
        component: ExperienceAndEducation
      },
      {
        path: 'skill',
        name: 'Skill',
        component: Skill
      }
    ]
  },
  {
    path: '/hammayoun-safi-cv-en',
    name: 'HammayounSaficvEn',
    component: HammayounSaficvEn
  },
  {
    path: '/hammayoun-safi-cv-fr',
    name: 'HammayounSaficvFr',
    component: HammayounSaficvFr
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
