<template>
  <div class="console">
    <div class="top" @click="toggleConsole"> <span class="options">x ○ --</span> <span class="title">Hama99o - Web developer </span></div>
    <div v-if="open" class="text">
      <span class="pink">root@hama99o:~$ </span> rails c
      <br> 2.5.7 :001 > <span class="text-success">my_name, my_age </span> <span class="text-primary">= </span> <span class="orange">'Hammayoun Safi',</span> <span class="text-warning">{{myAge}}</span>
      <br> 2.5.7 :002 > <span class="text-success">from </span> <span class="text-primary">= </span> <span class="orange">'Afghanistan'</span>
      <br> 2.5.7 :003 > <span class="text-success">lived </span> <span class="text-primary">= </span> <span class="orange">['Sweden','Italy']</span>
      <br> 2.5.7 :004 > <span class="text-success">living </span> <span class="text-primary">= </span> <span class="orange"> 'Malakoff, France'</span>
      <br> 2.5.7 :005 > <span class="text-success">my_hobbies</span> <span class="text-primary">= </span> <span class="orange">['coding','travel', 'hiking','snowboarding','swimming','cycling']</span>
      <br> 2.5.7 :006 > <span class="text-success">languages </span> <span class="text-primary">= </span> <span class="orange">['Pashto','French', 'English','Swedish', 'Urdu','Hindi','Persian']</span>
      <br> 2.5.7 :007 > <span class="text-success">programming_languages </span> <span class="text-primary">= </span> <span class="orange">['Javascript','Ruby','Bash']</span>
      <br> 2.5.7 :008 > <span class="text-success">web_technologies </span> <span class="text-primary">= </span> <span class="orange">['HTML','CSS']</span>
      <br> 2.5.7 :009 > <span class="text-success">database_server </span> <span class="text-primary">= </span> <span class="orange">['PostgreSQL']</span>
      <br> 2.5.7 :010 > <span class="text-success">frameworks </span> <span class="text-primary">= </span> <span class="orange">['Ruby on Rails','VueJS','NodeJS(express)','Bootstrap']</span>
      <br> 2.5.7 :011 > <span class="text-success">other_dev_tool </span> <span class="text-primary">= </span> <span class="orange">['Git','Gitlab','Heroku','Linux']</span>
      <br> 2.5.7 :012 > <span class="text-success">exit</span>
      <br> 2.5.7 :013 > <input type="text" class="text-success console-input w-80" autofocus>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Console',
  data () {
     return {
       open: true
     }
   },
  methods: {
    toggleConsole ()  {
      if (this.open) {
        this.open = false
      } else {
        this.open = true
      }
    }
  },
  computed: {
    rootText () {
      return `root@hama99o:~$`
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
  background-color: #02072F;

  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.75);
  .top {
    cursor: pointer;
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

.console-input {
  background-color: #02072F;
  border:0;
  outline: none;
  max-width: 100%;
}
</style>
