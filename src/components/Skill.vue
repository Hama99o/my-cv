<template>
  <div class="skill-container d-flex justify-content-center" :class="togglebgWithOpacity">
    <div class="func">
      <div class="skills-prog">
        <h3 :class="toggleWhiteTextColorForNightMood"><i class="fa fa-code" :class="toggleWhitebgAndDarkTextClass"></i>{{$t('message.skills.heading.programmingSkill')}}</h3>
        <ul :class="toggleWhiteTextColorForNightMood">
          <li>
            <span>{{programmingSkill.programmingLanguages}}:</span><span class="mx-3">Ruby, Javascript, Bash</span>
          </li>
          <hr class="my-1" />
          <li>
            <span>{{programmingSkill.webTechnologies}}: </span><span class="mx-3">HTML5 , CSS(SCSS)</span>
          </li>
          <hr class="my-1" />
          <li>
            <span>{{programmingSkill.frameworks}}: </span><span class="mx-3 toggle-ruby-on-rails">Ruby on Rails,</span>Vuejs, Boostrap</span>
          </li>
            <small>
              <code  :class="toggleWhiteTextColorForNightMood" class="ruby-on-rails">"Ruby on Rails": RSpec Rails, Devise, Sidekiq, Kaminari</code>
            </small>
          <hr class="my-1" />
          <li>
            <span>{{programmingSkill.otherDevTool}}:</span><span class="mx-3">Git, Github, Heroku, Linux</span>
          </li>
          <hr class="my-1" />
          <li>
            <span>{{programmingSkill.databaseServer}}:</span><span class="mx-3">PostgreSQL</span>
          </li>
          <hr class="my-1" />
        </ul>
      </div>
      <div class="skills-prog">
        <h3 :class="toggleWhiteTextColorForNightMood"><i class="fas fa-tasks":class="toggleWhitebgAndDarkTextClass"></i>{{$t('message.skills.heading.myProjects')}}</h3>
        <ul :class="toggleWhiteTextColorForNightMood">
          <li>
            <span>
              <a class="project-link" href="https://quotes-from-all-over-the-world.herokuapp.com/api/v1/quotes" target="_blank"> Quote Api </a> {{$t('message.skills.myProjects.and')}}
            </span>
            <a class="mx-2 project-link" href="https://github.com/Hama99o/quote_api" target="_blank"> Github Repository</a>
          </li>
          <hr class="my-1" />
          <li>
            <span>
              <a class="project-link" href="https://quote-guessing-game.herokuapp.com/" target="_blank"> Quote Guessing Game</a> {{$t('message.skills.myProjects.and')}}
            </span>
            <a class="mx-2 project-link" href="https://github.com/Hama99o/quote_api" target="_blank"> Github Repository</a>
          </li>
          <hr class="my-1" />
        </ul>
      </div>
      <div class="interests" :class="toggleWhiteTextColorForNightMood">
        <h3><i class="fa fa-star mt-3" :class="toggleWhitebgAndDarkTextClass"></i>{{$t('message.skills.heading.interests')}}</h3>
        <div class="interests-items">
          <div class="mountain"><i class="fas fa-mountain" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.travel')}}</span></div>
            <div class="bicycle"><i class="fas fa-bicycle" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.cycle')}}</span></div>
            <div class="music"><i class="fa fa-headphones" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.music')}}</span></div>
            <div class="game"><i class="fa fa-gamepad" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.game')}}</span></div>
            <div class="chess"><i class="fas fa-chess" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.chess')}}</span></div>
            <div class="snowboarding"><i class="fas fa-snowboarding" :class="toggleWhiteTextColorForNightMood"></i><span>{{$t('message.skills.interests.snowboard')}}</span></div>
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
    ...mapGetters(['toggleWhitebgAndDarkTextClass', 'toggleWhiteTextColorForNightMood', 'togglebgWithOpacity'])
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      $(".toggle-ruby-on-rails").click(function(){
        $(".ruby-on-rails").toggle()
      })
    })
  }
}
</script>

<style scoped>

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

.bg-white-with-opacity  {
  background-color: rgba(41, 43, 44, 0.8)
}

.bg-black-with-opacity  {
  background-color: rgb(247, 247, 247,  0.8)
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

.ruby-on-rails {
  display: none;
}
.project-link {
  text-decoration: none;
}
</style>
