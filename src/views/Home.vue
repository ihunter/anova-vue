<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center v-if="loading">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="250"
        :width="10"
      ></v-progress-circular>
    </v-layout>

    <v-layout column align-center v-else>
      <v-flex>
        <Timer :duration="3600" :timer-length="3000" v-if="isTimerRunning">
          <p>{{ 1 }}</p>
        </Timer>
      </v-flex>

      <v-flex>
        <Preheating>
          <p>
            Target Temp: {{ targetTemp }}
          </p>
          <p>
            Current Temp: {{ currentTemp }}
          </p>
        </Preheating>
      </v-flex>

      <v-flex>
        <v-btn v-if="!status.is_running" @click="start" color="success">Start</v-btn>
        <v-btn v-else @click="stop" color="error">Stop</v-btn>
      </v-flex>

      <v-flex>
        <v-subheader class="pl-0">Temp</v-subheader>
        <v-slider
          v-model="targetTemp"
          append-icon="whatshot"
          thumb-label="always"
          always-dirty
          min="32"
          max="211"
          step="1"
          ticks
        ></v-slider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StatusService from '@/services/StatusService'
import Timer from '@/components/Timer'
import Preheating from '@/components/Preheating'

export default {
  components: {
    Timer,
    Preheating
  },
  methods: {
    ...mapActions(['setStatus', 'setLoading', 'setTargetTemp']),
    async start () {
      const start = {
        target_temp: this.targetTemp,
        is_running: true
      }

      try {
        const status = (await StatusService.post(start)).data
        console.log(status)
        this.setStatus(status)
      } catch (e) {
        console.error(e)
      }
    },
    async stop () {
      const stop = {
        is_running: false
      }

      try {
        const status = (await StatusService.post(stop)).data
        this.setStatus(status)
      } catch (e) {
        console.error(e)
      }
    }
  },
  computed: {
    ...mapGetters(['status', 'currentTemp', 'loading', 'isTimerRunning']),
    targetTemp: {
      get () {
        return this.$store.getters.targetTemp
      },
      set (value) {
        this.setTargetTemp(value)
      }
    }
  },
  async mounted () {
    this.setLoading(true)
    try {
      const status = (await StatusService.index()).data
      this.setStatus(status)
    } catch (e) {
      console.error(e)
    } finally {
      this.setLoading(false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
