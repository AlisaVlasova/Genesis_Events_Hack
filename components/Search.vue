<template>
  <div class="search">
    <v-toolbar
      dark
      @change="event => search(event)"
    >
      <v-text-field
        placeholder="Шукати івент"
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
      <!-- отменить инпут -->
      <v-text-field
        placeholder="Шукати за датою"
        dark
        color="blue-grey"
        class="v-date-field"
        fab
        append-icon="mdi-calendar"
        hide-details
        single-line
        :value="picker.date"
        @click="isActivePicker = !isActivePicker"
        @change="(date) => filterDate(date)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
    isActivePicker: false,
    picker: {
      date: '',
    },
  }),
  computed: {
    ...mapGetters([
      'getEvents',
      'getEventsInitial',
    ])
  },
  methods: {
    ...mapMutations([
      'setEvents',
      'setEventsInitial',
    ]),
    search(event) {
      this.setEvents(
        this.getEventsInitial.filter(item => (
          item.title.includes(event.target.value)
            || item.description.includes(event.target.value)
        ))
      );
    },
    filterDate(date) {
      this.picker.date = this.$dayjs(date).format('DD.MM.YYYY');
      this.setEvents(
        this.getEventsInitial.filter(item => (
          item.date === this.picker.date
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
    flex-direction: column;
    position: relative;
    padding: 0 0 $container_padding 0;

    @media (min-width: 769px) {
      flex-direction: row;
      padding: 0 $container_padding 0 0;
    }

    .v-toolbar {
      background: $space-cadet;
      box-shadow: none;
    }

    .v-picker {
      position: absolute;
      top: 110%;
      right: 16px;
      z-index: 2;
    }

    .v-text-field {
      @media (max-width: 768px) {
        margin: 0 !important;
      }
    }

    .v-date-field {
      padding-left: $container_padding;
      padding-right: $container_padding;

      @media (min-width: 769px) {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>