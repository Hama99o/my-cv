<template>
  <b-container fluid>
    <b-row>
      <b-col offset-md="2">
        <h1 class="d-flex justify-content-center text-align-center my-2">Hammayoun Safi</h1>
        <hr class="my-4" />
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="6" md="2" class="my-4">
        <b-img-lazy
          thumbnail
          rounded="circle"
          src="https://avatars.githubusercontent.com/u/72570079?v=4"
          alt="github-photo">
        </b-img-lazy>
      </b-col>
      <b-col cols="12" md="10">
        <b-tabs content-class="mt-3" v-model="tabIndex" card>
          <b-tab title="Personal Profile" :title-link-class="linkClass(0)">  <personal-profile/></b-tab>
          <b-tab title="Experience" :title-link-class="linkClass(1)"><Experience/></b-tab>
          <b-tab title="Competence" :title-link-class="linkClass(2)"><Competence/></b-tab>
        </b-tabs>
      </b-col>
    </b-row>
    <GithubChart/>
  </b-container>
</template>

<script>
import GithubChart from './GithubChart'
import PersonalProfile from './PersonalProfile'
import Experience from './Experience'
import Competence from './Competence'

export default {
  name: 'Portfolio',
  components: { GithubChart, PersonalProfile, Experience, Competence },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-dark']
      }
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
