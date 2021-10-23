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
        noTitle
        v-if="isActivePicker"
        @change="(event) => filterDate(event)"
        color="#343f68ff"
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
    filterDate(event) {
      this.setEvents(
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