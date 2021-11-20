<template>
  <b-container fluid>
    <b-row>
      <b-col offset-md="2">
        <h1>Profile</h1>
        <hr class="my-4" />
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="6" md="2" class="my-4">
        <b-img-lazy
          thumbnail
          rounded="circle"
          src="https://avatars.githubusercontent.com/u/72570079?v=4"
          alt="Image 1">
        </b-img-lazy>
      </b-col>
      <b-col cols="12" md="10">
        <b-tabs content-class="mt-3" card>
          <Info/>
          <Experience/>
          <Competence/>
        </b-tabs>
      </b-col>
    </b-row>
    <GithubChart/>
  </b-container>
</template>

<script>
import GithubChart from './GithubChart'
import Info from './Info'
import Experience from './Experience'
import Competence from './Competence'

export default {
  name: 'Profile',
  components: { GithubChart, Info, Experience, Competence }
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
