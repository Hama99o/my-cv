<template>
  <div class="resume d-flex justify-content-center">
    <div class="func">
      <div class="skills-prog">
        <h3 :class="toggleWhiteTextColorForNightMood"><i class="fa fa-code" :class="toggleWhitebgAndDarkTextClass"></i>Programming Skills</h3>
        <ul  :class="toggleWhiteTextColorForNightMood">
          <li data-percent="65"><span>Ruby</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="60"><span>JavaScript</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="80"><span>HTML5</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="55"><span>CSS3 & SASS</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="65"><span>VueJS</span>
            <div class="skills-bar">
              <div class="bar"></div>
            </div>
          </li>
          <li data-percent="35"><span>jQuery</span>
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
        <h3><i class="fa fa-star" :class="toggleWhitebgAndDarkTextClass"></i>Interests</h3>
        <div class="interests-items">
          <div class="draw"><i class="fa fa-paint-brush" :class="toggleWhiteTextColorForNightMood"></i><span>Draw</span></div>
            <div class="movie"><i class="fa fa-film" :class="toggleWhiteTextColorForNightMood"></i><span>Movie</span></div>
            <div class="music"><i class="fa fa-headphones" :class="toggleWhiteTextColorForNightMood"></i><span>Music</span></div>
            <div class="game"><i class="fa fa-gamepad" :class="toggleWhiteTextColorForNightMood"></i><span>Game</span></div>
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

.resume {
  margin: 20px auto;
  border: 1px solid #bbb;
  box-shadow: 0 0 20px -3px #bbb;
  position: relative;
  display: flex;
}

.resume::after {
  content: "";
  display: block;
  clear: both;
}

.resume .func {
  width: 645px;
  padding: 30px 25px;
}
.resume .func:hover > div {
  transition-duration: 0.3s;
}
.resume .func:hover > div:hover h3 {
  letter-spacing: 1.6px;
}
.resume .func:hover > div:hover h3 i {
  transform: scale(1.2);
}
.resume .func:hover > div:not(:hover) {
  opacity: 0.5;
}
.resume .func h3 {
  transition-duration: 0.3s;
  margin-top: 0;
}
.resume .func h3 i {
  color: #fcfcfc;
  background: #8d9e78;
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
.resume .func .skills-prog {
  clear: both;
}
.resume .func .skills-prog ul {
  margin-left: 15px;
}
.resume .func .skills-prog ul li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
}
.resume .func .skills-prog ul li:hover {
  color: #e07a5f;
}
.resume .func .skills-prog ul li:hover .skills-bar .bar {
  background: #e07a5f;
  box-shadow: 0 0 0 1px #e07a5f;
}
.resume .func .skills-prog ul li span {
  display: block;
  width: 120px;
}
.resume .func .skills-prog ul li .skills-bar {
  background: #cdcdcd;
  height: 2px;
  width: calc(100% - 120px);
  position: relative;
  border-radius: 2px;
}
.resume .func .skills-prog ul li .skills-bar .bar {
  position: absolute;
  top: -1px;
  height: 4px;
  background: green;
  box-shadow: 0 0 0 #8d9e78;
  border-radius: 5px;
}

.resume .func .interests-items {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  border: 1px solid #cdcdcd;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.resume .func .interests-items div {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.resume .func .interests-items div:hover i {
  transform: scale(1.2);
}
.resume .func .interests-items div:hover span {
  color: #e07a5f;
  transition-duration: 0.3s;
}
.resume .func .interests-items div i {
  font-size: 45px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: #8d9e78;
  transition-duration: 0.3s;
}

.resume .func .interests-items div span {
  display: block;
}

.bg-white-with-opacity  {
  background-color: rgba(#292b2c, 0.8);
}

.bg-black-with-opacity  {
  background-color: rgba(#f7f7f7, 0.8);
}

</style>
