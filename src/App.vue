<template>
  <div id="app" class="d-flex flex-column">
    <background-animation />
    <router-view> </router-view>
  </div>
</template>

<script>
import BackgroundAnimation from './components/layouts/BackgroundAnimation.vue'

export default {
  name: 'App',
  components: { BackgroundAnimation }
}
</script>

<style>

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

.portfolio-container {
  position: relative;
  min-height: 100vh;
}

.nightmode {
  background: #292b2c;
  color: #eee;
}

* {
  position: relative;
}
</style>
