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

    <v-date-picker
      v-if="isActivePicker"
      v-model="picker"
      color="#343f68ff"
    ></v-date-picker>

    <button class="search__btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2z" fill="#fff"/></svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    isActivePicker: false,

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
    display: flex;

    .v-toolbar {
      background: $space-cadet;
      box-shadow: none;
    }
  }
</style>