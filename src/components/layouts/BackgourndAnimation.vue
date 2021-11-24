<template>
  <div class="backgournd-animation">
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>

    <div class="moon circle">
      <div class="circle crater"></div>
      <div class="circle crater"></div>
      <div class="circle crater"></div>
      <div class="eye circle"></div>
      <div class="mouth circle half"></div>
      <div class="eye circle"></div>
    </div>

    <div class="cloud top fixed"></div>
    <div class="cloud bottom fixed"></div>

    <div class="mountain fixed"></div>
    <div class="ground fixed"></div>
  </div>
</template>

<script>

export default {
  name: 'BackgourndAnimation',
  data () {
     return {
     }
   },
  methods: {
  },
  computed: {

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

.half {
  border-radius: 0 0 100vw 100vw;
}

.stars {
  background-image:
    radial-gradient(2px 2px at 20px 30px, rgba(#fff,.6), rgba(#000, 0)),
    radial-gradient(2px 2px at 40px 70px, rgba(#fff,.7), rgba(#000, 0)),
    radial-gradient(2px 2px at 50px 160px, rgba(#fff,.5), rgba(#000, 0)),
    radial-gradient(2px 2px at 90px 40px, rgba(#fff,.3), rgba(#000, 0)),
    radial-gradient(2px 2px at 130px 80px, rgba(#fff,.5), rgba(#000, 0)),
    radial-gradient(2px 2px at 160px 120px, rgba(#fff,.8), rgba(#000, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  content: "";
  display: block;
  height: 100vh;
  position: absolute;
  width: 100%;
}

.stars:nth-child(1) {
  background-position: 47% 49%;
}

.stars:nth-child(2) {
  background-position: 25% 56%;
}

.stars:nth-child(3) {
  background-position: -20% -20%;
}

.stars:nth-child(4) {
  background-position: 41% -72%;
}

.stars:nth-child(5) {
  background-position: -22% 45%;
}

.stars:nth-child(6) {
  background-position: 68% 23%;
}

.moon {
  background: #fff;
  border-right: 5vw solid rgba(201, 235, 235, .75);
  height: 20vw;
  position:fixed;
  right:2vw;
  text-align: center;
  top:-10vh;
  right: 25vh;
  transform:scale(.3);
  width: 20vw;
  z-index: 2;
}

.moon > * {
  display: inline-block;
  top: 11vw;
}

.crater {
  background: rgba(201, 235, 235, .25);
  height: 1vw;
  left: 5vw;
  position: absolute;
  top: 4vw;
  width: 1vw;
}

.crater:first-child {}

.crater:nth-child(2) {
  transform: translate(2vw, 1vw);
}

.crater:nth-child(3) {
  transform: translateY(2vw);
}

.crater.large {
  background: rgba(201, 235, 235, .75);
  height: 2vw;
  right: auto;
  left: 5vw;
  top: 3vw;
  width: 2vw;
}

.eye {
  background: #9ab3b3;
  height: 2vw;
  margin: 0 1vw;
  width: 2vw;
}

.mouth {
  background: #9ab3b3;
  height: 2vw;
  vertical-align: -2vw;
  width: 4vw;
}

.cloud {
  animation:slide ease-in 100s infinite;
  background:$cloud-color;
  border-radius: 10vw;
  bottom: 20vh;
  clear: both;
  height: 20vh;
  opacity: .4;
  width: 50vh;
}

.cloud:after {
  background: inherit;
  border-radius: 10vw;
  content: "";
  display: block;
  height: 25vh;
  left: 15vh;
  position: absolute;
  top: -12vh;
  width: 25vh;
}

.mountain {
  border: 40vh solid transparent;
  border-bottom-color: $ground-color;
  left: 10em;
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
  background:$ground-color;
  height: 4vh;
  width: 100vw;
}

@keyframes set {
  0% {
    box-shadow:0 0 0 2vw rgba(#444,.1),0 0 1vw 2vw rgba(#3F51B5,.2),0 0 0 10vw rgba(#555,.1);
    transform:translateY(0vh) scale(.5);
  }
  100% {
    transform:translateY(110vh) scale(.5);
  }
}

@keyframes slide {
  0% {
    transform: translateX(1vw);
  }
  100% {
    transform: translateX(100vw);
  }
}
</style>
