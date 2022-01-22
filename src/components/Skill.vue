<template>
  <div class="skill-container d-flex justify-content-center" :class="getClass('whiteBgWithOpacityInDark')">
    <div class="func">
      <div class="skills-prog">
        <h3 :class="getClass('whitetextColorInDark')"><i class="fa fa-code" :class="getClass('whitebgWithDarkTextInDark')"></i>{{$t('message.skills.heading.programmingSkill')}}</h3>
        <ul :class="getClass('whitetextColorInDark')">
          <li>
            {{programmingSkill.programmingLanguages}}:<span class="mx-2">Ruby, Javascript, Bash</span>
          </li>
          <hr class="my-1" />
          <li>
            {{programmingSkill.webTechnologies}}:<span class="mx-2">HTML5, CSS(SCSS)</span>
          </li>
          <hr class="my-1" />
          <li>
            {{programmingSkill.frameworks}}: <span class="mx-2"> <span> Ruby on Rails,</span> Vuejs(Vuex), Boostrap</span>
          </li>
          <hr class="my-1" />
          <li>
            {{programmingSkill.otherDevTool}}:<span class="mx-2">Git, Github, Heroku, Linux, Postman</span>
          </li>
          <hr class="my-1" />
          <li>
            {{programmingSkill.famousLibraries}}:<span class="mx-2">Jquery, Express - Node.js</span>
          </li>
          <hr class="my-1" />
          <li>
            {{programmingSkill.databaseServer}}:<span class="mx-2">PostgreSQL</span>
          </li>
          <hr class="my-1" />
        </ul>
      </div>
      <div class="skills-prog">
        <h3 :class="getClass('whitetextColorInDark')"><i class="fas fa-tasks" :class="getClass('whitebgWithDarkTextInDark')"></i>{{$t('message.skills.heading.myProjects')}}</h3>
        <ul :class="getClass('whitetextColorInDark')">
          <li>
            <span>
              <a class="project-link" :class="getClass('lightBlueLinkInDark')" href="https://quotes-from-all-over-the-world.herokuapp.com/api/v1/quotes" target="_blank"> Quote Api </a> {{$t('message.skills.myProjects.and')}}
            </span>
            <a class="mx-2 project-link" :class="getClass('lightBlueLinkInDark')" href="https://github.com/Hama99o/quote_api" target="_blank"> Github Repository</a>
          </li>
          <hr class="my-1" />
          <li>
            <span>
              <a class="project-link" :class="getClass('lightBlueLinkInDark')" href="https://quote-guessing-game.herokuapp.com/" target="_blank"> Quote Guessing Game</a> {{$t('message.skills.myProjects.and')}}
            </span>
            <a class="mx-2 project-link" :class="getClass('lightBlueLinkInDark')" href="https://github.com/Hama99o/quote_api" target="_blank"> Github Repository</a>
          </li>
          <hr class="my-1" />
        </ul>
      </div>
      <div class="interests" :class="getClass('whitetextColorInDark')">
        <h3 class="mt-3"><i class="fa fa-star" :class="getClass('whitebgWithDarkTextInDark')"></i>{{$t('message.skills.heading.interests')}}</h3>
        <div class="interests-items">
          <div class="mountain"><i class="fas fa-mountain" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.travel')}}</span></div>
            <div class="bicycle"><i class="fas fa-bicycle" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.cycle')}}</span></div>
            <div class="music"><i class="fa fa-headphones" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.music')}}</span></div>
            <div class="game"><i class="fa fa-gamepad" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.game')}}</span></div>
            <div class="chess"><i class="fas fa-chess" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.chess')}}</span></div>
            <div class="snowboarding"><i class="fas fa-snowboarding" :class="getClass('whitetextColorInDark')"></i><span>{{$t('message.skills.interests.snowboard')}}</span></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Skill',
  data() {
    return {
    }
  },
  computed: {
    programmingSkill () {
       return this.$t('message.skills.programmingSkill')
    },
    ...mapState(['lightDarkClasses']),
    ...mapGetters(['getTheme'])
  },
  methods: {
    getClass(attribute) {
      return this.lightDarkClasses[attribute][this.getTheme]
    }
  }
}
</script>

<style scoped lang="scss">

h3 {
  margin: 10px 0;
  text-transform: uppercase;
  font-size: 18px;
}

.skill-container {
  margin: 20px auto;
  border: 1px solid #bbb;
  box-shadow: 0 0 20px -3px #bbb;
  position: relative;
  display: flex;
}


.skill-container .func {
  width: 645px;
  padding: 30px 25px;
}

.skill-container .func:hover > div:hover h3 i {
  transform: scale(1.2);
}

.skill-container .func h3 i {
  width: 42px;
  height: 42px;
  font-size: 20px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  margin-right: 15px;
  transition-duration: 0.3s;
}

.skill-container .func .skills-prog ul li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.skill-container .func .interests-items {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border: 1px solid #cdcdcd;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.skill-container .func .interests-items div {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.skill-container .func .interests-items div:hover i {
  transform: scale(1.2);
}

.skill-container .func .interests-items div i {
  font-size: 45px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: #8d9e78;
  transition-duration: 0.3s;
}

.skill-container .func .interests-items div span {
  display: block;
}

@media (max-width: 768px) {
  h3 {
    font-size: 12px;
  }
  .skill-container .func .interests-items div i {
    font-size: 15px;
    width: 20px;
    height: 20px;
    line-height: 60px;
  }

  .skill-container .func .interests-items div {
    display: inline-block;
    width: 20%;
    height: 80px;
  }

  .skill-container .func .interests-items div span {
    font-size: 10px;
  }
}

.project-link {
  text-decoration: none;
}

</style>
