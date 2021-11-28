<template>
  <div class="portfolio-container container">
    <b-container fluid>
      <b-row>
        <b-col offset-md="2">
          <span @click="theme">
            <span v-if="!hasNightMood" class="btn moon-or-sun">🌙</span>
            <span v-else class="btn moon-or-sun">☀️</span>
          </span>
          <hr class="my-4" />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="6" md="2" class="my-4">
          <github-photo/>
        </b-col>

        <b-col cols="12" md="10">
          <b-tabs pills content-class="mt-3" v-model="tabIndex">
            <b-tab :title-link-class="linkClassForTabs(0)">
              <template #title>
                <code> Personal Profile </code>
              </template>
              <personal-profile/>
              <github-chart/>
            </b-tab>

            <b-tab :title-link-class="linkClassForTabs(1)">
              <template #title>
                <code> Experience && Education </code>
              </template>
              <experience-and-education/>
            </b-tab>

            <b-tab title="About" :title-link-class="linkClassForTabs(2)">
              <template #title>
                <code> Contact </code>
              </template>
              <contact/>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import GithubChart from '@/components/GithubChart'
import GithubPhoto from '@/components/GithubPhoto'
import PersonalProfile from '@/components/PersonalProfile'
import ExperienceAndEducation from '@/components/ExperienceAndEducation'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: { GithubChart, GithubPhoto, PersonalProfile, ExperienceAndEducation, Contact },
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    hasNightMood () {
      return this.$store.state.hasNightMood
    }
  },
  methods: {
    linkClassForTabs (idx) {
      const linkClass = []
      if (!this.hasNightMood) {
        this.tabIndex === idx ? linkClass.push('bg-dark', 'text-white') : linkClass.push('text-dark')
      } else {
        this.tabIndex === idx ? linkClass.push('text-dark', 'bg-white') : linkClass.push('bg-dark', 'text-white')
      }
      return linkClass
    },
    theme () {
      const body = document.querySelector('body')
      body.classList.toggle('nightmode')
      this.$store.state.hasNightMood = !this.$store.state.hasNightMood
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

.moon-or-sun {
  font-size: 50px;
}
</style>
