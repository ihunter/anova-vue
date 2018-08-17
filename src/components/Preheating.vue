<template>
  <v-progress-circular
    :value="progress"
    :rotate="270"
    :size="250"
    :width="15"
    color="green"
  >
    <v-fade-transition mode="out-in">
      <p v-if="toggle" key="A">Current Temp: {{ currentTemp }}</p>
      <p v-else key="B">Target Temp: {{ targetTemp }}</p>
    </v-fade-transition>
  </v-progress-circular>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      toggle: false
    }
  },
  computed: {
    ...mapGetters(['currentTemp', 'targetTemp']),
    progress () {
      return (this.currentTemp / this.targetTemp) * 100
    }
  },
  mounted () {
    setInterval(() => {
      this.toggle = !this.toggle
    }, 10000)
  }
}
</script>

<style>
</style>
