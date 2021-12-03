<template>
  <div class="">
    <span class="terminal-container">
      <div class="terminal d-flex" v-if ="!isConsoleClosed" @click="closeConsole()"></div>
    </span>
    <div v-if ="isConsoleClosed" class="console element" id="element">
      <div class="top" @click.self="toggleConsole" title="Minimize">
        <span class="options d-flex">
          <span @click="closeConsole()" title="Close">
            <i class="fas fa-times d-flex"></i>
          </span>
          <i v-if="!isFullScreen" class="far fa-square mx-2" @click="fullScreen()"></i>
          <i v-if="isFullScreen" class="fas fa-clone mx-2" @click="cancellFullScreen()"></i>
          <i @click.self="toggleConsole" class="fa fa-window-minimize" aria-hidden="true">
          </i>
        </span>
        <span class="title">{{ $t('message.console.phrase.consoleHeading') }}</span>
      </div>
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
        <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.console.phrase.chosePage')}}</span>
        <span v-if="IsWrong"> <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.console.phrase.errorMessage')}}</span></span>
        <br> <span class="pink">root@hama99o:~$ </span> <input type="text" v-model="consoleInput" class="text-success console-input w-80" v-on:keyup.enter="emptyTheInput" autofocus>
      </div>
    </div>
    <github-chart/>
  </div>
</template>

<script>
import GithubChart from '@/components/GithubChart'

export default {
  name: 'Console',
  components: { GithubChart },
  data () {
    return {
      open: true,
      consoleInput: '',
      IsWrong: false,
      isConsoleClosed: true,
      isFullScreen: false
    }
  },
  methods: {
    toggleConsole () {
      if (this.open) {
        this.open = false
        this.cancellFullScreen()
      } else {
        this.open = true
      }
    },
    closeConsole () {
      this.isConsoleClosed = !this.isConsoleClosed
    },
    fullScreen () {
      this.open = true
      this.isFullScreen = true
      const element = document.getElementById('element')
      const requestFullScreen = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      requestFullScreen.call(element)
    },
    cancellFullScreen () {
      this.isFullScreen = false
      const cancellFullScreen = document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen
      cancellFullScreen.call(document)
    },
    emptyTheInput () {
      if (this.consoleInput == '0') {
         this.$router.push({name: 'ExperienceAndEducation'})
      } else if (this.consoleInput == '1') {
        this.$router.push({name: 'Skill'})
      } else if (this.consoleInput == '2') {
        this.$router.push({name: 'Contact'})
      } else {
        this.IsWrong = true
        setTimeout(() => this.IsWrong = false, 1000);
      }
      this.consoleInput = ''
    }
  },
  computed: {
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
  width: 70%;
}

@media (max-width: 360px) {
  .console {
    .top {
      font-size: 10px;
      .options {
        font-size: 11px;
      }
    }
    .text {
      font-size: 10px;
    }
    .console-input {
      width: 40%;
    }
  }
}
@media only screen and (max-width: 768px) and (min-width: 360px) {
  .console {
    margin: 0;

    .top {
      font-size: 10px;
      .options {
        font-size: 12px;
      }
    }
    .text {
      font-size: 10px;
    }
    .console-input {
      width: 50%;
    }
  }
}
.terminal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.terminal {
  cursor: pointer;
  position: relative;
  width: 110px;
  height: 90px;
  box-sizing: border-box;
  background-color: #222;
  border: 7px solid #000;
  border-radius: 3px;
}
.terminal::before {
  content: "";
  position: absolute;
  top: -9px;
  left: -9px;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  padding: 9px;
  background-image: linear-gradient(to bottom, #dfecec, #bbb);
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
}
.terminal::after {
  content: ">_";
  position: absolute;
  top: 4px;
  left: 7px;
  font-size: 50px;
  font-weight: 600;
  color: white;
}

</style>
