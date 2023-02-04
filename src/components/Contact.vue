<template>
  <div class="contact-container d-flex justify-content-center" :class="getClass('whiteBgWithOpacityInDark')">
    <div class="func py-5">
      <div class="contact" :class="getClass('whitetextColorInDark')">
        <h3 :class="getClass('whitetextColorInDark')" class="my-3">Contact</h3>
        <!-- <div class="call my-2"><i class="fa fa-phone"></i><span> +33 7 66 66 62 33</span></div> -->
        <div class="address my-2"><i class="fa fa-map-marker"></i><span> Malakoff, France</span></div>
        <div class="email my-2"><i class="fa fa-envelope"></i> <a :class="getClass('lightBlueLinkInDark')" href="mailto:hmmshl@gmail.com" target="_blank"> <span> hmmshl@gmail.com</span></a></div>
      </div>

      <div class="follow py-3">
        <h3 :class="getClass('whitetextColorInDark')" class="my-3">{{heading.follow}}</h3>
        <div class="box">
          <a  href="https://github.com/Hama99o" target="_blank">
            <i class="fab fa-github" :class="getClass('whitebgWithDarkTextInDark')"></i>
          </a>

          <a  href="https://www.linkedin.com/in/hammayoun-safi-2916581bb" target="_blank">
            <i class="fab fa-linkedin-in" :class="getClass('whitebgWithDarkTextInDark')"></i>
          </a>

          <a href="https://www.facebook.com/hama99oo" target="_blank">
            <i class="fa fa-facebook bg-dark" :class="getClass('whitebgWithDarkTextInDark')"></i>
          </a>

          <a  href="https://www.instagram.com/hama99o" target="_blank">
            <i class="fab fa-instagram" :class="getClass('whitebgWithDarkTextInDark')"></i>
          </a>

          <!-- <a  href="https://twitter.com/hama99o1" target="_blank">
            <i class="fa fa-twitter" :class="getClass('whitebgWithDarkTextInDark')"></i>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Contact',
  data () {
    return {
    }
  },
  computed: {
    heading () {
      return this.$t('message.contact.heading');
    },
    ...mapState(['lightDarkClasses']),
    ...mapGetters([ 'getTheme'])
  },
  methods: {
    getClass(attribute) {
      return this.lightDarkClasses[attribute][this.getTheme]
    }
  }
}
</script>

<style scoped lang="scss">
.contact-container {
  margin: 20px auto;
  border: 1px solid #bbb;
  box-shadow: 0 0 20px -3px #bbb;
  position: relative;
  display: flex;
}

.contact-container .func {
  padding: 30px 25px;
}

.contact div:hover i {
  color: grey;
}

.follow .box {
  text-align: center;
  vertical-align: middle;
  margin-left: -10px;
}

.follow .box a:hover i {
  background: #e07a5f;
  border-radius: 5px;
  transform: rotate(45deg) scale(0.8);
}

.follow .box a:hover i::before {
  transform: rotate(-45deg) scale(1.5);
}

.follow .box i {
  display: inline-block;
  font-size: 30px;
  background: #8d9e78;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  color: #fcfcfc;
  margin: 0 10px 10px 10px;
  transition-duration: 0.3s;
}

.follow .box i::before {
  transition-duration: 0.3s;
}
</style>
