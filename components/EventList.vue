<template>
  <ul class="events-list">
    <li
      v-for="event of events"
      :key="event"
      class="events-list__item"
    >
      <img 
        class="events-list__img"
        src="@/assets/img/img.png"
        alt="">
      <div class="events-list__description">
        <h3 class="events-list__title">
          {{ event.name }}
        </h3>
        <p class="events-list__text">
          {{ event.text }}
        </p>
        <div class="events-list__bottom">
          <ul class="events-list__tags">
            <li
              v-for="tag of event.tags"
              :key="tag"
              class="events-list__tag"
            >
              {{ tag }}
            </li>
          </ul>
          <div class="events-list__date">
            {{ event.date }}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
     
  }),
}
</script>

<style lang="scss">
  @import '@/assets/scss/_vars.scss';

  .events-list {
    &__item {
      display: flex;
      flex-direction: column;
      padding: 24px 0;
      max-width: 100%;

      @media (min-width: 769px) {
        flex-direction: row;
      }
    }

    &__img {
      max-width: 100%;
      margin-bottom: 32px;

      @media (min-width: 769px) {
        max-width: 40%;
        margin-right: 32px;
        margin-bottom: 0;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
    }

    &__title {
      margin-bottom: 16px;
      font-size: 32px;
      line-height: 100%;
      color: $tangerine;

      @media (min-width: 769px) {
        margin-bottom: 32px;
        font-size: 50px;
      }
    }

    &__text {
      color: $text;
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: auto;
    }

    &__tags {
      display: flex;
      gap: 8px;
      max-width: 50%;
      margin-right: 16px;
    }

    &__tag {
      background-color: $purple-navy;
      color: $text;
      padding: 4px 8px;
      border-radius: 8px;
      text-align: center;
    }

    &__date {
      color: $tangerine;
    }
  }
</style>