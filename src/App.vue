<template>
  <div id="app" class="d-flex flex-column">
    <span @click="theme">
      <span v-if="!nightmode" class="btn">🌙</span>
      <span v-else class="btn">☀️</span>
    </span>
    <Portfolio :nightmode="nightmode"/>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: { Portfolio },
  data() {
    return {
      nightmode: false
    }
  },
  methods: {
    theme() {
      let b = document.querySelector("body");
      b.classList.toggle("nightmode");
      b.classList.toggle("neww");
      this.nightmode = !this.nightmode;
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}

#app {
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
