<template>
  <v-progress-circular
    :value="timeProgress"
    :rotate="270"
    :size="250"
    :width="15"
    color="green"
  >
    <slot></slot>
  </v-progress-circular>
</template>

<script>
export default {
  props: ['duration', 'timerLength'],
  data () {
    return {
      time: this.timerLength
    }
  },
  computed: {
    timeProgress () {
      return (1 - (this.timerLength / this.duration)) * 100
    }
  },
  mounted () {
    setInterval(() => {
      this.time -= 1
    }, 1000)
  }
}
</script>

<style>
</style>
