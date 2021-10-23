<template>
  <div class="events">
    <ul class="events__tags">
      <li
        v-for="tag of getTags"
        :key="tag"
        class="events__tag"
      >
        tag
      </li>
    </ul>
    <event-list :events="getEvents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // data: () => ({
  //   picker: '',
  // }),
  computed: {
    ...mapGetters([
      'getEvents',
      'getTags',
    ]),
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