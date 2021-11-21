<template>
  <div class="console">
    <div class="top"> <span class="options">⦿ ○ ○</span> <span class="title">Hama99o - Web developer </span></div>
    <div class="tabs"> </div>
    <div class="text">
      <br>[06:23:55] My name is <span class="pink">'Hammayoun Safi'</span> I am <span class="pink">'25'</span> years old...
      <br>[06:26:23] I come from <span class="pink">'Afghanistan'</span>
      <br>[06:24:55] I lived in <span class="pink">'Sweden'</span> and <span class="pink">'Italy'</span> for several years.....
      <br>[06:25:00] I live in <span class="blue"> 'France'</span> since August 2019
      <br> [06:25:02] <span class="orange">Eh, sexy lady 오-오-오-오 오빤 강남스타일</span>
      <br> [06:25:06] Strange cowboy moves
      <br>[06:24:55] Finished <span class="pink">'do-the-moves'</span> after 12 s
      <br> <span class="blue">? </span> Would you like to stop dancing soon as the song is ending? <span class="orange">Yes</span>
      <br> [06:25:14] Danced <span class="blue">234</span> steps, <span class="blue">234</span> passes, <span class="blue">0</span> failures: <span class="pink">SUCCESS </span>
      <br>
      <p class="typewriter"> root@PSY sudo <span class="pink"> dance-gangnam-style.exe</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data: function () {
     return {
     }
   },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.blue {
  color: #53d9d1;
}
.pink {
  color: #f27b9b;
}
.orange {
  color: #eb7132;
}
.console {
  border: 1px solid #444;
  border-radius: 3px;
  margin: 2rem;
  background-color: black;

  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.75);
  .top {
    background: #333;
    color: #666;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    .options {
      font-size: 16px;
      float: left;
    }
  }
  .text {
    font-family: courier;
    color: #fff;
    font-size: 14px;
    padding: 0.25rem;
  }
}

.typewriter {
  overflow: hidden;
  width: fit-content;
  white-space: nowrap;
  border-right: 0.15em solid #eb7132;
  animation: typing 3s steps(15, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

</style>
