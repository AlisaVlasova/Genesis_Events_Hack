<template>
  <div class="events">
    <event-list :events="getEvents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEvents']),
  },

  async fetch() {
    const data = await fetch(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    ).then((res) => res.json())
    console.log(data)
    this.$store.dispatch('setEvents', data)
  },
}
</script>
