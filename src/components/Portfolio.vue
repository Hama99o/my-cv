<template>
  <div class="portfolio-container container">
    <b-container fluid>
      <b-row>
        <b-col offset-md="2">
          <span @click="theme">
            <span v-if="!nightmode" class="btn moon-or-sun">🌙</span>
            <span v-else class="btn moon-or-sun">☀️</span>
          </span>
          <hr class="my-4" />
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="6" md="2" class="my-4">
          <github-photo />
          <h3 class="d-flex justify-content-center text-align-center my-3">
            <code :class="textClass()">Hammayoun Safi</code>
          </h3>
        </b-col>

        <b-col cols="12" md="10">
          <b-tabs content-class="mt-3" v-model="tabIndex" >
            <b-tab :title-link-class="linkClassForTabs(0)">
              <template #title>
                <code> Personal Profile </code>
              </template>
              <personal-profile/>
              <github-chart :nightmode="nightmode"/>
            </b-tab>

            <b-tab :title-link-class="linkClassForTabs(1)">
              <template #title>
                <code> Experience and Education </code>
              </template>
              <experience-and-education :nightmode="nightmode"/>
            </b-tab>

            <b-tab title="About" :title-link-class="linkClassForTabs(2)">
              <template #title>
                <code> About </code>
              </template>
              <about/>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GithubChart from './GithubChart'
import GithubPhoto from './GithubPhoto'
import PersonalProfile from './PersonalProfile'
import ExperienceAndEducation from './ExperienceAndEducation'
import About from './About'

export default {
  name: 'Portfolio',
  components: { GithubChart, GithubPhoto, PersonalProfile, ExperienceAndEducation, About },
  data() {
    return {
      tabIndex: 0,
      nightmode: false
    }
  },
  methods: {
    linkClassForTabs(idx) {
      const linkClass = []
      if (!this.nightmode) {
        this.tabIndex === idx ? linkClass.push('bg-dark', 'text-white' ) : linkClass.push('text-dark')
      } else {
        this.tabIndex === idx ? linkClass.push('text-dark', 'border-0') : linkClass.push('bg-dark', 'text-white', 'border-0' )
      }
      return linkClass
    },
    theme() {
      let body = document.querySelector("body");
      body.classList.toggle("nightmode");
      this.nightmode = !this.nightmode;
    },
    textClass () {
      return this.nightmode ? 'text-white' : 'text-dark'
    },
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
