<template>
  <div class="d-flex justify-content-center my-3">
    <iframe src="./my_cv_in_en.pdf"  frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>

export default {
  name: 'MyCv',
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
