<template>
  <div class="backgournd-animation">
    <div class="cloud"></div>
    <div class="mountain fixed" :class="toggleBorderBottomBgColor"></div>
    <div class="ground fixed" :class="groundBgClass"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BackgourndAnimation',
  data () {
     return {
     }
   },
  methods: {
    theme() {
      let body = document.querySelector("body");
      body.classList.toggle("nightmode");
      this.$store.state.hasNightMood = !this.$store.state.hasNightMood
    }
  },
  computed: {
    ...mapGetters(['groundBgClass', 'toggleWhitebgAndDarkTextClass', 'toggleBorderBottomBgColor']),
    ...mapState(['hasNightMood'])
  }
}
</script>

<style lang="scss" scoped>
$master-size: 10px;
$sky-color: #0a0a0a;
$ground-color: #37474F;
$cloud-color: #fff;

.fixed {
  bottom: 0;
  position: fixed;
}

.circle {
  border-radius: 100vw;
}

.cloud {
	width: 350px; height: 120px;
  animation:slide ease-in 100s infinite;

	background: #d0cccc;
	background: linear-gradient(top, #d0cccc 5%, #d6f0fd 100%);
	background: -webkit-linear-gradient(top, #d0cccc 5%, #d6f0fd 100%);
	background: -moz-linear-gradient(top, #d0cccc 5%, #d6f0fd 100%);
	background: -ms-linear-gradient(top, #d0cccc 5%, #d6f0fd 100%);
	background: -o-linear-gradient(top, #d0cccc 5%, #d6f0fd 100%);

	border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
  top: 40vh;
  clear: both;
  opacity: .5;
	position: absolute;
	margin: 140px auto 20px;
}

.cloud:after, .cloud:before {
	content: '';
	position: absolute;
	background: #d0cccc;
	z-index: -1
}

.cloud:after {
	width: 100px; height: 100px;
	top: -50px; left: 50px;

	border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
}

.cloud:before {
	width: 180px; height: 180px;
	top: -90px; right: 50px;
	border-radius: 200px;
	-webkit-border-radius: 200px;
	-moz-border-radius: 200px;
}


.mountain {
  border: 40vh solid transparent;
  left: 15em;
}

.mountain:before,.mountain:after {
  border: 30vh solid transparent;
  border-bottom-color: $ground-color;
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  position: absolute;
  top: -10vh;
}

.mountain:before {
  left: -55vh;
  top: -15vh;
}

.ground {
  height: 4vh;
  width: 100vw;
}

@keyframes slide {
  0% {
    transform: translateX(15vw);
  }
  50% {
    transform: translateX(70vw);
  }
  100% {
    transform: translateX(15vw);
  }
}

.dark-bottom-border {
  border-bottom-color: #292b2c;
}

.white-bottom-border {
  border-bottom-color: white;
}

.dark-bottom-border:before,.dark-bottom-border:after {
  border-bottom-color: #292b2c;
}

.white-bottom-border:before,.white-bottom-border:after {
  border-bottom-color: white;
}

@media (max-width: 868px) {
  .cloud, .mountain, .ground  {
    display: none;
  }
}
</style>
