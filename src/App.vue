<template>
  <div id="app" class="d-flex flex-column">
    <backgournd-animation />
    <router-view> </router-view>
  </div>
</template>

<script>
import BackgourndAnimation from './components/layouts/BackgourndAnimation.vue'

export default {
  name: 'App',
  components: { BackgourndAnimation }
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
