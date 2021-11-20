<template>
  <div class="d-flex justify-content-center">
    <a @click="RedirectToGithub" class="btn">
      <img src="http://ghchart.rshah.org/Hama99o" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'GithubChart',
  methods: {
    RedirectToGithub() {
      window.open("https://github.com/Hama99o", '_blank')
    }
  }
}
</script>

<style scoped>
</style>
