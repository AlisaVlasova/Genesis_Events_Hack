<template>
  <div class="search">
    <v-toolbar
      dark
      @change="event => search(event)"
    >
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    toggler: true,
  }),
  computed: {
    ...mapGetters([
      'getEvents',
    ])
  },
  methods: {
    ...mapMutations([
      'setEvents',
    ]),
    search(event) {
      this.setEvents(
        this.getEvents.filter(item => (
          item.text.includes(event.target.value)
        ))
      );
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';

  .search {
    .v-toolbar {
      background: $space-cadet;
      box-shadow: none;
    }
  }
</style>