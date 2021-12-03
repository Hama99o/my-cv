<template>
  <div>
    <select v-model="$i18n.locale" @change="getLang($event)" :class="bgDarkIfHasNightMood">
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
import { mapGetters } from 'vuex'

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
    ...mapGetters(['bgDarkIfHasNightMood'])
  },
  methods: {
    getLang (lang) {
      localStorage.locale = lang.target.value
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
