<template>
  <div class="search">
    <v-toolbar
      dark
      @change="event => search(event)"
    >
      <v-text-field
        placeholder="Search"
        hide-details
        append-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>

    <div class="search__date">
      <v-date-picker
        v-if="isActivePicker"
        no-title
        color="#343f68ff"
        @change="(event) => filterDate(event)"
      ></v-date-picker>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        fab
        @click="isActivePicker = !isActivePicker"
      >
        <v-icon color="#343f68ff">
          mdi-calendar
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    isActivePicker: false,
    picker: [],
  }),
  computed: {
    ...mapGetters([
      'getEvents',
      'getEventsClone',
    ])
  },
  methods: {
    ...mapMutations([
      'setEvents',
      'setEventsClone',
    ]),
    search(event) {
      this.setEventsClone(
        this.getEvents.filter(item => (
          item.title.includes(event.target.value)
            || item.description.includes(event.target.value)
        ))
      );
    },
    filterDate(event) {
      this.setEventsClone(
        this.getEvents.filter(item => (
          item.date === event
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
    padding-right: 16px;
    position: relative;
    
    .v-toolbar {
      background: $space-cadet;
      box-shadow: none;
    }

    .v-picker {
      position: absolute;
      top: 110%;
      right: 16px;
    }
  }
</style>