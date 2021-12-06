<template>
  <div class="d-flex justify-content-center my-3">
    <iframe src="./my_cv_in_fr.pdf"  frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>

export default {
  name: 'MyCvFr',
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
iframe {
  height: 100%;
width: 100%;
left: 0;
top: 0;
overflow: hidden;
position: fixed;
}
</style>
