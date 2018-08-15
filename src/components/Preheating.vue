<template>
  <v-progress-circular
    :value="progress"
    :rotate="270"
    :size="250"
    :width="15"
    color="green"
  >
    <slot></slot>
  </v-progress-circular>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentTemp', 'targetTemp']),
    progress () {
      return (this.currentTemp / this.targetTemp) * 100
    }
  }
}
</script>

<style>
</style>
