<template>
  <div>
    <span @click="theme">
      <span v-if="!hasNightMood" class="btn moon-or-sun">🌙</span>
      <span v-else class="btn moon-or-sun">☀️</span>
    </span>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {
  name: 'MoonOrSunMenu',
  props: ['theme', 'hasNightMood'],
  data() {
    return {

    }
  }
}
</script>
