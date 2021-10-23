<template>
  <div class="events">
    <ul class="events__tags">
      <li
        v-for="tag of getTags"
        :key="tag"
        class="events__tag"
        @click="filterTag(tag)"
      >
        tag
      </li>
    </ul>
    <event-list :events="getEventsClone" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getEvents',
      'getEventsClone',
      'getTags',
    ]),
  },
  methods: {
    ...mapMutations([
      'setEvents',
      'setEventsClone',
    ]),
    filterTag(tag) {
      this.setEventsClone(
        this.getEvents.filter(item => (
          item.tags.includes(tag)
        ))
      );
    }
  },
  // eslint-disable-next-line vue/order-in-components
  async fetch() {
    const data = await fetch(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    ).then((res) => res.json())

    this.$store.dispatch('setEvents', Object.values(data))
    this.$store.dispatch('setEventsClone', Object.values(data))
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';

  .events {
    &__tags {
      display: flex;
      align-items: center;
    }

    &__tag {
      background-color: $purple-navy;
      color: $text;
      padding: 4px 8px;
      margin-right: 8px;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>

