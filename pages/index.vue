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

</script>
