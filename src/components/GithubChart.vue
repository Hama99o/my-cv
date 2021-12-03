<template>
  <div class="d-flex justify-content-center my-3">
    <a @click="RedirectToGithub" class="btn">
      <img :src="toggleChart()" class="img-responsive"/>
    </a>
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
  width: 100%;
  height: 110px;
}

@media (max-width: 768px) {
  .img-responsive {
    width: 100%;
    height: 80px;
  }
}
</style>
