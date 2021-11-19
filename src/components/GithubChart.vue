<template>
  <div class="d-flex justify-content-center">
    <a @click="Redirect" class="btn">
      <img src="http://ghchart.rshah.org/Hama99o" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'GithubChart',
  methods: {
    Redirect() {
      window.open("https://github.com/Hama99o", '_blank')
    }
  }
}
</script>

<style scoped>

</style>
