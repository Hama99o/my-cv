<template>
  <div class="resume">
    <div class="func" :class="toggleWhiteTextColorForNightMood">
      <div class="work">
        <h3><i class="fa fa-briefcase"></i></h3>
        <ul>
          <li><span>Front-end Web Designer</span><small>Apr 2016 - Now</small></li>
          <li><span>Design Assistant</span><small>Mar 2015 - Dec 2015</small></li>
          <li><span>Design Assistant (Part-time)</span><small>Oct 2014 - Jul 2015</small></li>
        </ul>
      </div>
      <div class="edu">
        <h3><i class="fa fa-graduation-cap"></i></h3>
        <ul>
          <li><span>Department of Information Management</span><small>Set 2010 - Jun 2014</small></li>
          <li><span>Department of Data Processing</span><small>Set 2007 - Jun 2010</small></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Ex',
  computed:  {
    ...mapGetters(['toggleWhitebgAndDarkTextClass', 'toggleWhiteTextColorForNightMood'])
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">


a {
  text-decoration: none;
  color: #555;
  display: block;
  transition-duration: 0.3s;
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
  width: 870px;
  // background: #fbfbfb;
  margin: 20px auto;
  border: 1px solid #bbb;
  box-shadow: 0 0 20px -3px #bbb;
  position: relative;
  display: flex;
}
.resume::before {
  content: "";
  width: 100%;
  height: 6px;
  background: #8d9e78;
  position: absolute;
  bottom: 0;
  left: 0;
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
.resume .func .work ul li:hover span, .resume .func .edu ul li:hover span {
  color: #c05a88;
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
.resume .func .work {
  width: 42%;
}
.resume .func .edu {
  width: 58%;
}
</style>
