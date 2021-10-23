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
    <event-list :events="getEvents" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getEvents',
      'getTags',
    ]),
  },
  methods: {
    ...mapMutations([
      'setEvents',
    ]),
    filterTag(tag) {
      this.setEvents(
        this.getEvents.filter(item => (
          item.tags.includes(tag)
        ))
      );
    }
  }
  async fetch() {
    const data = await fetch(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    ).then((res) => res.json())

    this.$store.dispatch('setEvents', Object.values(data))
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

