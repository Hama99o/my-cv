<template>
  <div>
    <select v-model="$i18n.locale" @change="getLang($event)" :class="getClass('darkBgInDark')">
      <option
        v-for="(langAndFlag, i) in langsAndFlags"
        :key="`lang-${i}`"
        :value="langAndFlag.lang">
        {{ langAndFlag.flag }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SelectLocale',
  data() {
    return {
      langsAndFlags: [
        { lang: 'en', flag: '🇺🇸'},
        { lang: 'fr', flag:  '🇫🇷'}
      ]
    }
  },
  computed: {
    ...mapState(['lightDarkClasses']),
    ...mapGetters([ 'getTheme'])
  },
  methods: {
    getLang (lang) {
      localStorage.locale = lang.target.value
    },

    getClass(attribute) {
      return this.lightDarkClasses[attribute][this.getTheme]
    }
  }
}
</script>

<style scoped>
  select:focus {
    outline: none;
  }

  select {
    border: 0;
  }
</style>
