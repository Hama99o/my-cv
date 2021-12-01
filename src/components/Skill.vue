<template>
  <div class="skill-container d-flex justify-content-center" :class="togglebgWithOpacity">
    <div class="func">
      <div class="skills-prog">
        <h3 :class="toggleWhiteTextColorForNightMood" class="my-3"><i class="fa fa-code" :class="toggleWhitebgAndDarkTextClass"></i>{{$t('message.skills.heading.programminSkill')}}</h3>
        <ul  :class="toggleWhiteTextColorForNightMood">
          <li data-percent="60"><span>Ruby</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="60"><span>JavaScript</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="70"><span>HTML5</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="55"><span>CSS3 & SASS</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="60"><span>Ruby on Rails</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="60"><span>VueJS</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="25"><span>jQuery</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="55"><span>Express</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="interests" :class="toggleWhiteTextColorForNightMood">
        <h3><i class="fa fa-star" :class="toggleWhitebgAndDarkTextClass"></i>{{$t('message.skills.heading.interests')}}</h3>
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
    ...mapGetters(['toggleWhitebgAndDarkTextClass', 'toggleWhiteTextColorForNightMood', 'togglebgWithOpacity'])
  },
  mounted () {
    this.$nextTick(() => {
      (function() {
        $('.skills-prog li').find('.skills-bar').each(function(i) {
          $(this).find('.bar').delay(i * 150).animate({
            width: $(this).parents().attr('data-percent') + '%'
          }, 1000, 'linear', function() {
            return $(this).css({
              'transition-duration': '.5s'
            })
          })
        })
      }).call(this)
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

.skill-container::after {
  content: "";
  display: block;
  clear: both;
}

.skill-container .func {
  width: 645px;
  padding: 30px 25px;
}
.skill-container .func:hover > div {
  transition-duration: 0.3s;
}
.skill-container .func:hover > div:hover h3 {
  letter-spacing: 1.6px;
}
.skill-container .func:hover > div:hover h3 i {
  transform: scale(1.2);
}
.skill-container .func:hover > div:not(:hover) {
  opacity: 0.5;
}
.skill-container .func h3 {
  transition-duration: 0.3s;
  margin-left: 25px;
}
.skill-container .func h3 i {
  width: 42px;
  height: 42px;
  font-size: 20px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  margin-right: 8px;
  transition-duration: 0.3s;
}
.skill-container .func .skills-prog {
  clear: both;
}

.skill-container .func .skills-prog ul li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
}
.skill-container .func .skills-prog ul li:hover {
  color: #e07a5f;
}
.skill-container .func .skills-prog ul li:hover .skills-bar .bar {
  background: #e07a5f;
  box-shadow: 0 0 0 1px #e07a5f;
}
.skill-container .func .skills-prog ul li span {
  display: block;
  width: 120px;
}
.skill-container .func .skills-prog ul li .skills-bar {
  background: #cdcdcd;
  height: 2px;
  width: 50%;
  position: relative;
  border-radius: 2px;
}
.skill-container .func .skills-prog ul li .skills-bar .bar {
  position: absolute;
  top: -1px;
  height: 4px;
  background: green;
  box-shadow: 0 0 0 #8d9e78;
  border-radius: 5px;
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
.skill-container .func .interests-items div:hover span {
  color: #e07a5f;
  transition-duration: 0.3s;
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

</style>
