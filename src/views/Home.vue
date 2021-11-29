<template>
  <div class="portfolio-container container">
    <select-locale />
    <b-container fluid>
      <b-row>
        <b-col offset-md="2">
          <moon-or-sun-menu :theme="theme" :hasNightMood="hasNightMood"  />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="6" md="2" class="my-4">
          <github-photo/>
        </b-col>
        <b-col cols="12" md="10">
          <div class="mb-4">
            <ul class="nav nav-pills" >
              <li class="nav-item">
                <router-link class="nav-link" :class="linkClassForTabs(0)" :to="{ name: 'PersonalProfile' }">
                  <code @click="clickOnMenu(0)">{{ $t('message.heading.personalProfile') }}</code>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :class="linkClassForTabs(1)" :to="{ name: 'ExperienceAndEducation' }">
                  <code @click="clickOnMenu(1)"> {{$t('message.heading.experienceAndEducation')}} </code>
                </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :class="linkClassForTabs(2)" :to="{ name: 'Contact' }">
                    <code @click="clickOnMenu(2)"> {{ $t('message.heading.contact') }} </code>
                  </router-link>
                </li>
              </ul>
            </div>
            <router-view> </router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SelectLocale from '@/components/SelectLocale.vue'
import GithubChart from '@/components/GithubChart'
import GithubPhoto from '@/components/GithubPhoto'
import MoonOrSunMenu from '@/components/MoonOrSunMenu'

export default {
  name: 'Home',
  components: { GithubChart, GithubPhoto, SelectLocale, MoonOrSunMenu },
  data () {
    return {
      menuList: {
        'PersonalProfile':  0,
        'ExperienceAndEducation': 1,
        'Contact': 2
      }
    }
  },
  computed: {
    hasNightMood () {
      return this.$store.state.hasNightMood
    },
    tabIndex: {
      get (){
        return this.tabIndex = this.menuList[`${this.$route.name}`]
      },
      set (val){}
    }
  },
  methods: {
    clickOnMenu (id) {
      this.tabIndex = id
    },
    theme () {
      const body = document.querySelector('body')
      body.classList.toggle('nightmode')
      this.$store.state.hasNightMood = !this.$store.state.hasNightMood
    },
    linkClassForTabs (idx) {
      const linkClass = []
      if (!this.hasNightMood) {
        this.tabIndex === idx ? linkClass.push('bg-dark', 'text-white') : linkClass.push('text-dark')
      } else {
        this.tabIndex === idx ? linkClass.push('text-dark', 'bg-white') : linkClass.push('bg-dark', 'text-white')
      }
      return linkClass
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
