<template>
  <div class="console">
    <div class="top" @click="toggleConsole"> <span class="options">⦿ x ○</span> <span class="title">{{ $t('message.console.phrase.consoleHeading') }}</span></div>
    <div v-if="open" class="text">
      <span class="pink">root@hama99o:~$ </span> rails c
      <br> 2.5.7 :001 > <span class="text-success">{{consoleQuestions.myNameAndAGe}} </span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.myNameAndAGe}},</span> <span class="text-warning">{{myAge}}</span>
      <br> 2.5.7 :002 > <span class="text-success">{{consoleQuestions.from}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.from}}</span>
      <br> 2.5.7 :003 > <span class="text-success">{{consoleQuestions.lived}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.lived}}</span>
      <br> 2.5.7 :004 > <span class="text-success">{{consoleQuestions.living}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.living}}</span>
      <br> 2.5.7 :005 > <span class="text-success">{{consoleQuestions.myHobbies}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.myHobbies}}</span>
      <br> 2.5.7 :006 > <span class="text-success">{{consoleQuestions.languages}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.languages}}</span>
      <br> 2.5.7 :007 > <span class="text-success">{{consoleQuestions.programmingLanguages}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.programmingLanguages}}</span>
      <br> 2.5.7 :008 > <span class="text-success">{{consoleQuestions.databaseServer}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.databaseServer}}</span>
      <br> 2.5.7 :009 > <span class="text-success">{{consoleQuestions.webTechnologies}}</span> <span class="text-primary">= </span> <span class="orange">{{consoleAnswers.webTechnologies}}</span>
      <br> 2.5.7 :010 > <span class="text-success">{{consoleQuestions.frameworks}}</span><span class="text-primary">= </span> <span class="orange">{{consoleAnswers.frameworks}}</span>
      <br> 2.5.7 :011 > <span class="text-success">{{consoleQuestions.otherDevTool}}</span><span class="text-primary">= </span> <span class="orange">{{consoleAnswers.otherDevTool}}</span>
      <br> 2.5.7 :012 > <span class="text-success">{{$t('message.console.phrase.exit')}}</span>
      <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.console.phrase.cv')}} <router-link :to="{ name: 'HammayounSaficv' }" target="_blank">CV</router-link>
      <br> <span class="pink">root@hama99o:~$ </span> <input type="text" class="text-success console-input w-80" autofocus>
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
    toggleConsole () {
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
    consoleQuestions () {
       return this.$t('message.console.questions')
    },
    consoleAnswers () {
       return this.$t('message.console.answers')
    },
    myAge () {
      return Math.abs(new Date(Date.now()).getUTCFullYear() - 1995)
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

@media (max-width: 360px) {
  .console {
    .top {
      font-size: 6px;
      .options {
        font-size: 8px;
      }
    }
    .text {
      font-size: 5px;
    }
  }
}
@media only screen and (max-width: 600px) and (min-width: 360px) {
  .console {
    .top {
      font-size: 8px;
      .options {
        font-size: 10px;
      }
    }
    .text {
      font-size: 8px;
    }
  }
}

@media only screen and (max-width: 1220px) and (min-width: 600px) {
  .console {
    .top {
      font-size: 12px;
      .options {
        font-size: 12px;
      }
    }
    .text {
      font-size: 10px;
    }
  }
}
</style>
