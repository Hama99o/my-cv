<template>
  <div class="exp-and-edu-container" :class="togglebgWithOpacity">
    <div class="func" :class="toggleWhiteTextColorForNightMood">
      <div>
        <router-link class="d-flex justify-content-end" :to="{ name: 'HammayounSaficv' }" target="_blank">My CV</router-link>
        <hr class="my-1" />
      </div>
      <div class="work">
        <h3><i class="fa fa-briefcase" :class="toggleWhitebgAndDarkTextClass"></i></h3>
        <ul>
          <li>
            <span>
              {{exAndEduText.jamText1}} <a href="https://www.hellojam.fr/" target="_blank"> Jam </a> {{exAndEduText.jamText2}}
            </span>
            <small>
              {{exAndEduLocation.jamLocation}}
            </small><small>
              {{exAndEduYear.jamYear}}
            </small>
          </li>
          <li>
            <span>
              {{exAndEduText.scarabeeText1}} <a href="https://scarabee-malakoff.fr/" target="_blank"> Scarabée </a>{{exAndEduText.scarabeeText2}}
            </span>
            <small>
              {{exAndEduLocation.scarabeeLocation}}
            </small>
            <small>
              {{exAndEduYear.scarabeeYear}}
            </small>
          </li>
          <li>
            <span>
              {{exAndEduText.alvkungenText1}} <a href="https://www.facebook.com/Alvkungen" target="_blank"> Älvkungen </a> {{exAndEduText.alvkungenText2}}
            </span>
            <small>
              {{exAndEduLocation.alvkungenLocation}}
            </small>
            <small>
              {{exAndEduYear.alvkungenYear}}
            </small>
          </li>
          <li>
            <span>
              {{exAndEduText.honeySellerText}}
            </span>
            <small>
              {{exAndEduLocation.honeySellerLocation}}
            </small>
            <small>
              {{exAndEduYear.honeySellerYear}}
            </small>
          </li>
        </ul>
      </div>
      <div class="edu">
        <h3><i class="fa fa-graduation-cap" :class="toggleWhitebgAndDarkTextClass"></i></h3>
        <ul>
          <li>
            <span>
              {{exAndEduText.konexioText}}
            </span>
            <small>
              {{exAndEduLocation.konexioLocation}}
            </small>
            <small>
              {{exAndEduYear.konexioYear}}
            </small>
          </li>
          <li>
            <span>
              {{exAndEduText.balderText}}
            </span><small>
              {{exAndEduLocation.balderLocation}}
            </small>
            <small>{{exAndEduYear.balderYear}}
            </small>
          </li>
          <li>
            <span>
              {{exAndEduText.milatSchoolText}}
            </span>
            <small>
              {{exAndEduLocation.milatSchoolLocation}}
            </small>
            <small>
              {{exAndEduYear.milatSchoolYear}}
            </small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ExperienceAndEducation',
  data () {
    return {
    }
  },
  computed: {
    exAndEduText() {
      return this.$t('message.experienceAndEducation.text');
    },
    exAndEduLocation () {
      return this.$t('message.experienceAndEducation.location');
    },
    exAndEduYear () {
      return this.$t('message.experienceAndEducation.year');
    },
    ...mapState(['hasNightMood']),
    ...mapGetters(['toggleWhitebgAndDarkTextClass', 'toggleWhiteTextColorForNightMood', 'togglebgWithOpacity'])
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

a {
  text-decoration: none;
  transition-duration: 0.3s;
  color: blue;
}

ul {
  list-style-type: none;
  padding: 0;
}

h3 {
  color: #3d405b;
  margin: 10px 0;
  text-transform: uppercase;
  font-size: 18px;
}

.exp-and-edu-container {
  margin: 20px auto;
  border: 1px solid #bbb;
  box-shadow: 0 0 20px -3px #bbb;
  position: relative;
  display: flex;
}

.exp-and-edu-container::after {
  content: "";
  display: block;
  clear: both;
}

.exp-and-edu-container .base, .exp-and-edu-container .func {
  box-sizing: border-box;
  float: left;
}

.exp-and-edu-container .base > div, .exp-and-edu-container .func > div {
  padding-bottom: 10px;
}

.exp-and-edu-container .base > div:last-of-type, .exp-and-edu-container .func > div:last-of-type {
  padding-bottom: 0;
}

.exp-and-edu-container .base {
  width: 225px;
  padding: 30px 15px;
  background: rgba(238, 238, 238, 0.6);
}

.exp-and-edu-container .func {
  padding: 30px 25px;
}

.exp-and-edu-container .func:hover > div {
  transition-duration: 0.3s;
}

.exp-and-edu-container .func:hover > div:hover h3 {
  letter-spacing: 1.6px;
}

.exp-and-edu-container .func:hover > div:hover h3 i {
  transform: scale(1.2);
}
.exp-and-edu-container .func h3 {
  transition-duration: 0.3s;
  margin-top: 0;
}

.exp-and-edu-container .func h3 i {
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

.exp-and-edu-container .func .work, .exp-and-edu-container .func .edu {
  float: left;
}

.exp-and-edu-container .func .work small, .exp-and-edu-container .func .edu small {
  display: block;
  opacity: 0.7;
}

.exp-and-edu-container .func .work ul li, .exp-and-edu-container .func .edu ul li {
  position: relative;
  margin-left: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
}

.exp-and-edu-container .func .work ul li:hover::before, .exp-and-edu-container .func .edu ul li:hover::before {
  animation: circle 1.2s infinite;
}

@keyframes circle {
  from {
    box-shadow: 0 0 0 0px #3d405b;
  }
  to {
    box-shadow: 0 0 0 6px rgba(61, 64, 91, 0);
  }
}

.exp-and-edu-container .func .work ul li:first-of-type::before, .exp-and-edu-container .func .edu ul li:first-of-type::before {
  width: 10px;
  height: 10px;
  left: -2px;
}

.exp-and-edu-container .func .work ul li:last-of-type, .exp-and-edu-container .func .edu ul li:last-of-type {
  padding-bottom: 3px;
}

.exp-and-edu-container .func .work ul li:last-of-type::after, .exp-and-edu-container .func .edu ul li:last-of-type::after {
  border-radius: 1.5px;
}

.exp-and-edu-container .func .work ul li::before, .exp-and-edu-container .func .work ul li::after, .exp-and-edu-container .func .edu ul li::before, .exp-and-edu-container .func .edu ul li::after {
  content: "";
  display: block;
  position: absolute;
}

.exp-and-edu-container .func .work ul li::before, .exp-and-edu-container .func .edu ul li::before {
  width: 7px;
  height: 7px;
  border: 3px solid #3d405b;
  background: #fcfcfc;
  border-radius: 50%;
  left: 0;
  z-index: 1;
}

.exp-and-edu-container .func .work ul li::after, .exp-and-edu-container .func .edu ul li::after {
  width: 3px;
  height: 100%;
  background: #3d405b;
  left: 5px;
  top: 0;
}

.exp-and-edu-container .func .work ul li span, .exp-and-edu-container .func .edu ul li span {
  transition-duration: 0.3s;
}

.bg-white-with-opacity  {
  background-color: rgba(#292b2c, 0.8);
}

.bg-black-with-opacity  {
  background-color: rgba(#f7f7f7, 0.8);
}

@media (min-width: 500px) {
  .exp-and-edu-container .func .work {
    width: 50%;
  }
  .exp-and-edu-container .func .edu {
    width: 50%;
  }
}
</style>
