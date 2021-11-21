<template>
  <div class="console">
    <div class="top"> <span class="options">⦿ ○ ○</span> <span class="title">Hama99o - Web developer </span></div>
    <div class="text">
      <span v-html="rootText" class="pink"></span> <span class="text-success">my_name, my_age </span> <span class="text-primary">= </span> <span class="orange">'Hammayoun Safi',</span> <span class="text-warning">{{myAge}}</span>
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">from </span> <span class="text-primary">= </span> <span class="orange">'Afghanistan'</span>
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">lived </span> <span class="text-primary">= </span> <span class="orange">['Sweden', 'Italy']</span>
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">living </span> <span class="text-primary">= </span> <span class="orange"> 'Malakoff, France'</span>
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">languages </span> <span class="text-primary">= </span> <span class="orange">['pashto', 'french' 'english', 'swedish', 'urdu', 'hindi', 'persian']</span>
      <br> <span v-html="rootText" class="pink"></span> <span class="text-success">my_hobbies</span> <span class="text-primary">= </span> <span class="orange">[coding, travel, hiking, snowboarding, swimming, cycling]</span>
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
  data () {
     return {
     }
   },
  methods: {
  },
  computed: {
    rootText () {
      return `root@hama99o:~#`
    },
    myAge () {
      return Math.abs(new Date( Date.now()).getUTCFullYear() - 1995)
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
