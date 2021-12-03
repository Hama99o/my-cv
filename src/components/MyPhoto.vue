<template>
  <div class="">
    <div class="zoom-effect-container">
      <div class="zoom-effect-container image-card d-flex justify-content-center">
        <b-img-lazy
          rounded="circle"
          class="brightness"
          src="hama_round.png"
          alt="my-photo">
        </b-img-lazy>
      </div>
    </div>
    <h4 class="d-flex justify-content-center text-align-center my-3">
      <code :class="toggleWhiteTextColorForNightMood" class="name-title">Hammayoun Safi</code>
    </h4>
    <a href="https://www.codewars.com/users/Hama99o" target="_blank" class="d-flex justify-content-center text-align-center">
      <img src="https://www.codewars.com/users/Hama99o/badges/micro" class="img-responsive"/>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyPhoto',
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

@media only screen and (max-width: 766px) {
  .image-card img {
    max-width: 70%;
  }

}

@media only screen and (max-width: 566px) {
  .image-card img {
    max-width: 60%;
  }
  .name-title {
    font-size: 15px;
  }
}

.img-responsive {
  width: auto;
  height: 30px;
}

@media only screen and (max-width: 1000px) {
  .img-responsive {
    width: auto;
    height: 22px;
  }
}
</style>
