<template>
  <div class="console">
    <div class="top"> <span class="options">⦿ ○ ○</span> <span class="title">Hama99o - Web developer </span></div>
    <div class="text">
      <span v-html="rootText" class="pink"></span> My name is <span class="orange">'Hammayoun Safi'</span> I am <span class="pink">'25'</span> years old..
      <br> <span v-html="rootText" class="pink"></span> I come from <span class="orange">'Afghanistan'</span>
      <br> <span v-html="rootText" class="pink"></span> I lived in <span class="orange">'Sweden'</span> and <span class="orange">'Italy'</span> for several years.
      <br> <span v-html="rootText" class="pink"></span> I live in <span class="orange"> 'France'</span> since August 2019
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">my_hobbies</span> = <span class="orange">[coding, travel, snowboarding, swimming]</span>
      <br> <span v-html="rootText" class="pink"></span> Strange cowboy moves
      <br> <span v-html="rootText" class="pink"></span> Finished <span class="pink">'do-the-moves'</span> after 12 s
      <br> <span class="blue">? </span> Would you like to stop dancing soon as the song is ending? <span class="orange">Yes</span>
      <br> <span v-html="rootText" class="pink"></span> Danced <span class="blue">234</span> steps, <span class="blue">234</span> passes, <span class="blue">0</span> failures: <span class="pink">SUCCESS </span>
      <br> <span v-html="rootText" class="pink"></span> sudo <span class="pink"> dance-gangnam-style.exe</span>
    </div>
  <div v-html="rootText"></div>
  </div>
</template>

<script>
export default {
  name: 'Console',
  data: function () {
     return {
     }
   },
  methods: {
  },
  computed: {
    rootText() {
      return `root@hama99o:~#`
    }
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

</style>
