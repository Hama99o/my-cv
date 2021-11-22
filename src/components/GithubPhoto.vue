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
  margin-left: 10px;
}

.zoom-effect-container:hover .image-card img {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

.brightness {
  -webkit-animation: brightness 95s infinite;
  animation-iteration-count: 1;
}

@-webkit-keyframes brightness {
  0%, 100%  { -webkit-filter: brightness(20%); }
  50% { -webkit-filter: brightness(1.2); }

}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

.image-card  {
	animation: float 6s ease-in-out infinite;
}
</style>
