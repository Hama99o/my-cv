<template>
  <div id="app" class="d-flex flex-column">
    <Portfolio/>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: { Portfolio }
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

body {
  background: lightgray;
  font-family: monospace;
}

.nightmode {
  background: #000;
  color: #eee;
}
</style>
