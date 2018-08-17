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

    <v-layout justify-center v-else>
      <v-flex xs6>
        <v-card class="text-xs-center">
          <v-card-text>
            <Timer :duration="3600" :timer-length="3000" v-if="isTimerRunning">
              <p>{{ 1 }}</p>
            </Timer>

            <Preheating v-else></Preheating>

            <v-subheader class="pl-0">Temp</v-subheader>
            <v-slider
              v-model="clientTemp"
              append-icon="whatshot"
              prepend-icon="ac_unit"
              thumb-label="always"
              always-dirty
              min="32"
              max="211"
            ></v-slider>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <TimerDialog></TimerDialog>
            <v-spacer></v-spacer>
            <v-btn v-if="!status.is_running" @click="start" color="success" block large>Start</v-btn>
            <v-btn v-else @click="stop" color="error" block large>Stop</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'
import StatusService from '@/services/StatusService'

import Timer from '@/components/Timer'
import Preheating from '@/components/Preheating'
import TimerDialog from '@/components/TimerDialog'

export default {
  components: {
    Timer,
    Preheating,
    TimerDialog
  },
  data () {
    return {
      socket: io('localhost:3000'),
      clientTemp: this.targetTemp
    }
  },
  methods: {
    ...mapActions(['setStatus', 'setLoading', 'setTargetTemp']),
    async start () {
      const start = {
        target_temp: this.clientTemp,
        is_running: true
      }

      try {
        const status = (await StatusService.post(start)).data
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
    ...mapGetters(['status', 'currentTemp', 'targetTemp', 'loading', 'isTimerRunning'])
  },
  async mounted () {
    this.setLoading(true)
    try {
      const status = (await StatusService.index()).data
      this.setStatus(status)
      this.clientTemp = this.targetTemp
    } catch (e) {
      console.error(e)
    } finally {
      this.setLoading(false)
    }

    this.socket.on('update', (data) => {
      console.log('CLIENT UPDATED')
      const { status } = data
      this.setStatus(status)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
