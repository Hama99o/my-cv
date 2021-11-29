<template>
  <div class="zoom-effect-container">
    <div class="image-card">
      <b-img-lazy
        rounded="circle"
        class="brightness"
        src="https://avatars.githubusercontent.com/u/72570079?v=4"
        alt="github-photo">
      </b-img-lazy>
    </div>
    <h4 class="d-flex justify-content-center text-align-center my-3">
      <code :class="toggleWhiteTextColorForNightMood">Hammayoun Safi</code>
    </h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GithubPhoto',
  methods: {
  },
  computed: {
    ...mapGetters(['toggleWhiteTextColorForNightMood'])
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
