<template>
  <div class="resume" :class="togglebgWithOpacity">
    <div class="func" :class="toggleWhiteTextColorForNightMood">
      <div class="work">
        <h3><i class="fa fa-briefcase" :class="toggleWhitebgAndDarkTextClass"></i></h3>
        <ul>
          <li><span>{{exAndEduText.jamText1}} <a href="https://www.hellojam.fr/" target="_blank"> Jam </a> {{exAndEduText.jamText2}}</span><small>{{exAndEduLocation.jamLocation}}</small><small>{{exAndEduYear.jamYear}}</small></li>
          <li><span>{{exAndEduText.scarabeeText1}} <a href="https://scarabee-malakoff.fr/" target="_blank"> Scarabée  </a>{{exAndEduText.scarabeeText2}}</span><small>{{exAndEduLocation.scarabeeLocation}}</small><small>{{exAndEduYear.scarabeeYear}}</small></li>
          <li><span>{{exAndEduText.alvkungenText1}}  <a href="https://www.facebook.com/Alvkungen" target="_blank"> Älvkungen </a> {{exAndEduText.alvkungenText2}} </span><small>{{exAndEduLocation.alvkungenLocation}}</small><small>{{exAndEduYear.alvkungenYear}}</small></li>
          <li><span>{{exAndEduText.honeySellerText}}</span><small>{{exAndEduLocation.honeySellerLocation}}</small><small>{{exAndEduYear.honeySellerYear}}</small></li>
        </ul>
      </div>
      <div class="edu">
        <h3><i class="fa fa-graduation-cap" :class="toggleWhitebgAndDarkTextClass"></i></h3>
        <ul>
          <li><span>{{exAndEduText.konexioText}}</span><small>{{exAndEduLocation.konexioLocation}}</small><small>{{exAndEduYear.konexioYear}}</small></li>
          <li><span>{{exAndEduText.balderText}}</span><small>{{exAndEduLocation.balderLocation}}</small><small>{{exAndEduYear.balderYear}}</small></li>
          <li><span>{{exAndEduText.milatSchoolText}}</span><small>{{exAndEduLocation.milatSchoolLocation}}</small><small>{{exAndEduYear.milatSchoolYear}}</small></li>
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
    togglebgWithOpacity () {
      return this.hasNightMood ? 'bg-white-with-opacity' : 'bg-black-with-opacity'
    },
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
    ...mapGetters(['toggleWhitebgAndDarkTextClass', 'toggleWhiteTextColorForNightMood'])
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

.resume .base, .resume .func {
  box-sizing: border-box;
  float: left;
}

.resume .base > div, .resume .func > div {
  padding-bottom: 10px;
}

.resume .base > div:last-of-type, .resume .func > div:last-of-type {
  padding-bottom: 0;
}

.resume .base {
  width: 225px;
  padding: 30px 15px;
  background: rgba(238, 238, 238, 0.6);
}

.resume .func {
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

.resume .func .work, .resume .func .edu {
  float: left;
}

.resume .func .work small, .resume .func .edu small {
  display: block;
  opacity: 0.7;
}

.resume .func .work ul li, .resume .func .edu ul li {
  position: relative;
  margin-left: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
}

.resume .func .work ul li:hover::before, .resume .func .edu ul li:hover::before {
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

.resume .func .work ul li:first-of-type::before, .resume .func .edu ul li:first-of-type::before {
  width: 10px;
  height: 10px;
  left: -2px;
}

.resume .func .work ul li:last-of-type, .resume .func .edu ul li:last-of-type {
  padding-bottom: 3px;
}

.resume .func .work ul li:last-of-type::after, .resume .func .edu ul li:last-of-type::after {
  border-radius: 1.5px;
}

.resume .func .work ul li::before, .resume .func .work ul li::after, .resume .func .edu ul li::before, .resume .func .edu ul li::after {
  content: "";
  display: block;
  position: absolute;
}

.resume .func .work ul li::before, .resume .func .edu ul li::before {
  width: 7px;
  height: 7px;
  border: 3px solid #3d405b;
  background: #fcfcfc;
  border-radius: 50%;
  left: 0;
  z-index: 1;
}

.resume .func .work ul li::after, .resume .func .edu ul li::after {
  width: 3px;
  height: 100%;
  background: #3d405b;
  left: 5px;
  top: 0;
}

.resume .func .work ul li span, .resume .func .edu ul li span {
  transition-duration: 0.3s;
}

.toggle {
   display: none;
}

.bg-white-with-opacity  {
  background-color: rgba(#292b2c, 0.8);
}

.bg-black-with-opacity  {
  background-color: rgba(#f7f7f7, 0.8);
}

@media (min-width: 500px) {
  .resume .func .work {
    width: 50%;
  }
  .resume .func .edu {
    width: 50%;
  }
}
</style>
