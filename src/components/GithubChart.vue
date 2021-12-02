<template>
  <div class="">
    <a href="https://www.codewars.com/users/Hama99o" target="_blank" class="d-flex justify-content-center my-3">
      <img src="https://www.codewars.com/users/Hama99o/badges/large" class="img-responsive"/>
    </a>
    <div class="d-flex justify-content-center my-3">
      <a @click="RedirectToGithub" class="btn">
        <img :src="toggleChart()" class="img-responsive"/>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GithubChart',
  computed: {
    ...mapState(['hasNightMood'])
  },
  methods: {
    RedirectToGithub () {
      window.open('https://github.com/Hama99o', '_blank')
    },
    toggleChart () {
      if (this.hasNightMood) {
        return 'https://ghchart.rshah.org/5A30AF/Hama99o'
      } else {
        return 'https://ghchart.rshah.org/873030/Hama99o'
      }
    }
  }
}
</script>

<style scoped>
.img-responsive {
  max-width: 100%;
  height: auto;
}
</style>
