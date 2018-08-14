<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout justify-center>
        <pre>
          {{ status }}
        </pre>
        <v-btn @click="start" :disabled="status.is_running">Start</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import StatusService from '@/services/StatusService'

export default {
  data () {
    return {
      status: {}
    }
  },
  methods: {
    async start () {
      const config = {
        target_temp: 100.0,
        temp_unit: 'f'
      }

      const start = {
        is_running: false
      }

      try {
        this.status = (await StatusService.post(start)).data
      } catch (e) {
        console.error(e)
      }
    }
  },
  async mounted () {
    try {
      this.status = (await StatusService.index()).data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
