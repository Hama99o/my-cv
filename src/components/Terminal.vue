<template>
  <div class="">
    <span class="terminal-container">
      <div class="terminal-icon d-flex" v-if ="!isTerminalClosed" @click="closeTerminal()"></div>
    </span>
    <div v-if ="isTerminalClosed" class="terminal element" id="element">
      <div class="top" @dblclick.self="toggleTerminalScreen()">
        <span class="options d-flex">
          <span @click="closeTerminal()" title="Close">
            <i class="fas fa-times d-flex"></i>
          </span>
          <i v-if="!isFullScreen" class="far fa-square mx-2" @click="fullScreen()" title="Fullscreen"></i>
          <i v-if="isFullScreen" class="fas fa-clone mx-2" @click="cancellFullScreen()" title="Fullscreen"></i>
          <i @click.self="minimizeTerminal()" class="fa fa-window-minimize" aria-hidden="true" title="Minimize"></i>
        </span>
        <span class="title">{{ $t('message.terminal.phrase.terminalHeading') }}</span>
      </div>
      <div v-if="open" class="text">
        <span class="pink">root@hama99o:~$ </span> rails c
        <br> 2.5.7 :001 > <span class="text-success">{{terminalQuestions.myNameAndAGe}} </span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.myNameAndAGe}},</span> <span class="text-warning">{{myAge}}</span>
        <br> 2.5.7 :002 > <span class="text-success">{{terminalQuestions.from}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.from}}</span>
        <br> 2.5.7 :003 > <span class="text-success">{{terminalQuestions.lived}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.lived}}</span>
        <br> 2.5.7 :004 > <span class="text-success">{{terminalQuestions.living}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.living}}</span>
        <br> 2.5.7 :005 > <span class="text-success">{{terminalQuestions.myHobbies}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.myHobbies}}</span>
        <br> 2.5.7 :006 > <span class="text-success">{{terminalQuestions.languages}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.languages}}</span>
        <br> 2.5.7 :007 > <span class="text-success">{{terminalQuestions.programmingLanguages}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.programmingLanguages}}</span>
        <br> 2.5.7 :008 > <span class="text-success">{{terminalQuestions.databaseServer}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.databaseServer}}</span>
        <br> 2.5.7 :009 > <span class="text-success">{{terminalQuestions.webTechnologies}}</span> <span class="text-primary">= </span> <span class="orange">{{terminalAnswers.webTechnologies}}</span>
        <br> 2.5.7 :010 > <span class="text-success">{{terminalQuestions.frameworks}}</span><span class="text-primary"> = </span> <span class="orange">{{terminalAnswers.frameworks}}</span>
        <br> 2.5.7 :011 > <span class="text-success">{{terminalQuestions.otherDevTool}}</span><span class="text-primary"> = </span> <span class="orange">{{terminalAnswers.otherDevTool}}</span>
        <br> 2.5.7 :012 > <span class="text-success">{{$t('message.terminal.phrase.exit')}}</span>
        <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.terminal.phrase.cv')}} <router-link :to="{ name: $t('message.HammayounSaficvEn') }" target="_blank">CV</router-link>
        <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.terminal.phrase.chosePage1')}}</span>
        <!-- <br> <span class="pink">root@hama99o:~$ </span>{{$t('message.terminal.phrase.chosePage2')}}</span> -->
        <span v-if="shouldReply"> <br> <span class="pink">root@hama99o:~$ </span>{{rendomPhrase}}</span></span>
        <br> <span class="pink">root@hama99o:~$ </span> <input type="text" v-model="terminalInput" @change="getRendomPhrase($event)" class="text-success terminal-input w-80" v-on:keyup.enter="emptyTheInput" autofocus>
      </div>
    </div>
    <github-chart/>
  </div>
</template>

<script>
import GithubChart from '@/components/GithubChart'

export default {
  name: 'Terminal',
  components: { GithubChart },
  data () {
    return {
      open: true,
      terminalInput: '',
      shouldReply: false,
      isTerminalClosed: true,
      isFullScreen: false,
      rendomPhrase: '?',
      clearTime: null
    }
  },
  computed: {
    terminalQuestions () {
       return this.$t('message.terminal.questions')
    },
    terminalAnswers () {
       return this.$t('message.terminal.answers')
    },
    myAge () {
      var _birth = parseInt("" + 1995 + this.affixZero(1) + this.affixZero(17));
      var  today = new Date();
      var _today = parseInt("" + today.getFullYear() + this.affixZero(today.getMonth() + 1) + this.affixZero(today.getDate()));
      return parseInt((_today - _birth) / 10000);
    },
    terminalInputLowerCase() {
      return this.terminalInput.toLowerCase()
    }
  },
  methods: {
    minimizeTerminal () {
      if (this.open) {
        this.open = false
        this.cancellFullScreen()
      } else {
        this.open = true
      }
    },
    toggleTerminalScreen () {
      if (this.isFullScreen) {
        this.cancellFullScreen()
      } else {
        this.fullScreen()
      }
    },
    closeTerminal () {
      this.isTerminalClosed = !this.isTerminalClosed
      if (this.isTerminalClosed) {
        this.open = true
      }
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
      if (this.terminalInputLowerCase) {
        clearTimeout(this.clearTime);
        if (this.terminalInputLowerCase == '0') {
           this.$router.push({name: 'ExperienceAndEducation'})
        } else if (this.terminalInputLowerCase == '1') {
          this.$router.push({name: 'Skill'})
        } else if (this.terminalInputLowerCase == '2') {
          this.$router.push({name: 'Contact'})
        } else if (this.terminalInputLowerCase.toLowerCase() == 'exit') {
          this.closeTerminal()
        } else {
          this.shouldReply = this.terminalInput ? true : false
        }
        this.terminalInput = ''
        this.clearTime = setTimeout(() => this.shouldReply = false, 5000)
      }
    },
    getRendomPhrase () {
      const hiHelloArray = ['hi', 'hello', 'salut', 'caio']
      if (hiHelloArray.some((e) => this.terminalInputLowerCase.includes(e))) {
        this.rendomPhrase = 'hi buddy'
      } else {
        const allPhrase = this.$t('message.terminal.phrase.errorMessage')
        this.rendomPhrase = allPhrase[Date.now()%allPhrase.length]
      }
    },
    affixZero (int) {
      if (int < 10) int = "0" + int;
      return "" + int;
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
.terminal {
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

.terminal-input {
  background-color: #02072F;
  border:0;
  outline: none;
  width: 70%;
}

@media (max-width: 360px) {
  .terminal {
    .top {
      font-size: 10px;
      .options {
        font-size: 11px;
      }
    }
    .text {
      font-size: 10px;
    }
    .terminal-input {
      width: 40%;
    }
  }
}
@media only screen and (max-width: 768px) and (min-width: 360px) {
  .terminal {
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
    .terminal-input {
      width: 50%;
    }
  }
}
.terminal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.terminal-icon {
  cursor: pointer;
  position: relative;
  width: 110px;
  height: 90px;
  box-sizing: border-box;
  background-color: #222;
  border: 7px solid #000;
  border-radius: 3px;
}
.terminal-icon::before {
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
.terminal-icon::after {
  content: ">_";
  position: absolute;
  top: 4px;
  left: 7px;
  font-size: 50px;
  font-weight: 600;
  color: white;
}

</style>
