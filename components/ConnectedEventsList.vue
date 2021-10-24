<template>
  <div>
    <ul class="profile-list">
      <li v-for="event of eventsData" :key="event.id" class="profile__item">
        <div class="profile__description">
          <h5 class="profile__title">
            {{ event.title }}
          </h5>
          <p class="profile__text">{{ event.description.slice(0, 30) }}...</p>
          <div class="profile__bottom">
            <div class="profile__date">
              {{ $dayjs(event.date).format('DD.MM.YYYY') }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['connectedEvents'],
  data() {
    return {
      eventsData: [],
      data: [],
    }
  },
  async fetch() {
    this.data = await fetch(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    ).then((res) => res.json())

    this.eventsData = this.connectedEvents.map((el, id) => this.data[el])
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.profile {
  &__item {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-bottom: 32px;
    max-width: 100%;
    cursor: pointer;
    border: 1px solid #fff;

    // @media (min-width: 769px) {
    //   flex-direction: row;

    //   &:nth-child(even) {
    //     flex-direction: row-reverse;
    //   }
    // }
  }

  &__title {
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: normal;
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

  &__date {
    color: $tangerine;
  }
}
</style>
