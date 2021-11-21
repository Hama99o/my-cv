<template>
  <div id="app" class="d-flex flex-column">
    <Portfolio/>
    <Footer/>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: { Portfolio, Footer }
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
</style>
