<template>
  <section v-if="event" class="event">
    <div class="event__info">
      <div class="event__img-wrap">
        <img class="event__img" :src="event.img" />
      </div>
      <div class="event__info-wrap">
        <h1 class="event__title">{{ event.title }}</h1>
        <p class="event__text">{{ event.city }}</p>
        <!-- <p>{{event.owner}}</p> ID here -->
        <p class="event__text">{{event.description}}</p>

        <p class="event__text">
          <span class="event__text--bold">PRICE: </span>
          {{event.payment}}</p>
        <p class="event__text">
          <span class="event__text--bold">TYPE: </span>
           {{event.type}}
        </p>
        <div class="events-list__bottom">
          <ul class="events-list__tags">
            <li
              v-for="tag of event.tag"
              :key="tag"
              class="events-list__tag"
            >
              {{ tag }}
            </li>
          </ul>
          <div class="event__date">
            {{ $dayjs(event.date).format('DD.MM.YYYY') }}
          </div>
        </div>
      </div>
    </div>
    <div class="event__comments">
      <AddComment />
      <LazyCommentsList v-if="commentsList.length > 0" :comments="commentsList" />
      <VNoItems v-else essence="comments" />
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    async asyncData({ $http, params }) {
      const event = await $http.$get(
        `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events/${params.id}.json`
      )

      const comments = await $http.$get(
        `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/comments/${params.id}.json`
      )

      return { event, comments }
    },

  computed: {
    commentsList() {
      return Object.values(this.comments)
    }
  },

  mounted() {
    console.log(this.getCookie('user'));
    if (this.getCookie('user')) {
      this.setToken(this.getCookie('user'));
    }
  },

  methods: {
     ...mapActions(['setToken']),
    getCookie(name) {
      const matches = document.cookie.match(new RegExp(
        // eslint-disable-next-line
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  },   
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.event {
  padding: 20px;

  &__info {
    display: flex;
  }

  &__info-wrap {
    width: 60%;
  }

  &__img {
    width: 250px;
    height: 300px;
  }

  &__img-wrap {
    margin-right: 50px;
  }

  &__text,
  &__title {
    font-size: 1.3em;
    color: $text;
  }
  &__text--bold {
    font-weight: bold;
  }

  &__date {
    padding: 5px;
    font-weight: bold;
    color: $space-cadet;
    background: rgba(241,136,5,1);
    border-radius: 3px;
  }
}
</style>