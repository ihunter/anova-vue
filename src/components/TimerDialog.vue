<template>
  <v-dialog v-model="dialog" width="500">
    <v-btn
        slot="activator"
        color="info"
        block
        large
      >
        Set Timer
      </v-btn>

    <v-card>
      <v-card-title>
        How long do you want to cook for?
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="time" mask="time"></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="setTime">Set Time</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import StatusService from '@/services/StatusService'

export default {
  data () {
    return {
      dialog: false,
      time: ''
    }
  },
  methods: {
    async setTime () {
      const jobInfo = {
        job_info: {
          display_item_identifier: '668',
          duration: 3600,
          job_type: 'manual_cook',
          source: '1',
          source_identifier: '668',
          temperature: 129,
          temperature_unit: 'F'
        },
        job_type: 'manual_cook',
        target_temp: 129.0,
        temp_unit: 'f',
        timer_length: 3600
      }

      try {
        const response = (await StatusService.post(jobInfo)).data
        console.log(response)
      } catch (error) {
        console.log(error)
      } finally {
        this.dialog = false
      }
    }
  }
}
</script>

<style>

</style>
