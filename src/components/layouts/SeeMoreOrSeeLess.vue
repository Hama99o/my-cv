<template>
  <div class="see-more-or-see-less">
  <small>
     <a v-if="!seeHistory" @click="toggleHistory" href="#show-less" :class="getClass('lightBlueLinkInDark')">{{options.seeMore}}</a>
     <a v-if="seeHistory" @click="toggleHistory" href="#show-less" :class="getClass('lightBlueLinkInDark')">{{options.seeLess}}</a>
   </small>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SeeMoreOrSeeLess',
  props: ['seeHistory'],
  data() {
    return {
    }
  },
  computed: {
    options () {
      return this.$t('message.experienceAndEducation.options')
    },
    ...mapState(['lightDarkClasses']),
    ...mapGetters([ 'getTheme'])
  },
  methods: {
    getClass (attribute) {
      return this.lightDarkClasses[attribute][this.getTheme]
    },
    toggleHistory () {
       this.$emit('toggleHistory')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
