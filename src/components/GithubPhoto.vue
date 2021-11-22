<template>
  <div class="zoom-effect-container">
    <div class="image-card">
      <b-img-lazy
      rounded="circle"
      src="https://avatars.githubusercontent.com/u/72570079?v=4"
      alt="github-photo">
    </b-img-lazy>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GithubPhoto',
  methods: {
  }
}
</script>

<style scoped>
.image-card img {
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  background-color: #fff;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.zoom-effect-container:hover .image-card img {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

</style>
