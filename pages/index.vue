<template>
  <div class="events">
    <event-list :events="getEvents" />
  </div>
</template>

<script>


import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getEvents',
    ]),
  }
}


export default {}

// import { mapActions } from 'vuex'
// export default {
//   data: () => ({}),
//   methods: {
//     ...mapActions(['setEvents']),
//     async fetch() {
//       const events = await fetch(
//         'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
//       ).then((res) => res.json())
//       console.log(events)

//       this.setEvents(events)
//     },
//   },
// }
</script>
