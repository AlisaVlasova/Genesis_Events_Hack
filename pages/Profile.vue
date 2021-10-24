<template>
  <section class="profile">
    <aside class="profile__user">
      <div class="profile__adaptiv-img">
        <img class="profile__img" :src="imgSrc()" :alt="user.name" />
      </div>

      <div class="profile__block">
        <h3 class="profile__title">Profile Information</h3>
        <p class="profile__text">
          <span class="profile__text_grey">Name: </span>{{ user.name }}
        </p>
        <p class="profile__text">
          <span class="profile__text_grey">Location: </span>Kyiv
        </p>
        <p class="profile__text">
          <span class="profile__text_grey">Age: </span>{{ user.age }}
        </p>
        <label class="profile__text" for="avatar">Choose a profile picture:</label>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          v-model="avatar"
          label="Avatar"
          dark
        ></v-file-input>

        <v-btn
          elevation="2"
        >Save</v-btn>
      </div>
    </aside>

    <div class="profile__actions">
      <h2 class="secondary-title profile__secondary-title">
        All events
      </h2>
      <event-list :events="eventList" />
      <h2 class="secondary-title profile__secondary-title">
        All users
      </h2>
      <UserList v-if="user.role === 'creator'" :users="getUsers" />
      <h2 class="secondary-title profile__secondary-title">
        Publish new event
      </h2>
      <new-event></new-event>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import newEvent from '../components/newEvent.vue'

export default {
  components: { newEvent },
  middleware:'authenticated',
 
  data() {
    return {
      avatar: '',

      user: {
        userName: 'Leonid Shvab',
        age: 10,
        bio: 'some bio',
        role: 'admin',
      },
    }
  },
  async asyncData({ $http, params }) {
    // TODO: нужен ИД конкретного юзера
    const user = await $http.$get(
      `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/users/eqreygqfuqeyg.json`
    )
    user.id = 'eqreygqfuqeyg'

    const events = await $http.$get(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json'
    )

    return { user, events }
  },
  computed: {
    ...mapGetters(['getUsers', 'getEvents']),

    eventList() {
      return Object.values(this.events)
    }
  },
  midlleware: 'authenticated',
  created() {
    // console.log(12)
    console.log('user: ',this.user)
  },
  methods: {
    imgSrc() {
      return `https://firebasestorage.googleapis.com/v0/b/kyiv-events-b93ca.appspot.com/o/${this.user.id}.png?alt=media`
    },
    isAdmin() {
      return this.user.role === 'creator'
    },
    async submitAvatar() {
      const formData = new FormData()
      formData.append('file', this.avatar)
      console.log('>> formData >> ', formData)

      // You should have a server side REST API
      await fetch(
        `https://firebasestorage.clients6.google.com/v0/b/kyiv-events-b93ca.appspot.com/o/${this.user.id}.png`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'image/png',
          },
          body: this.avatar,
        }
      )
        .then(window.location.reload())
        .catch(function () {
          console.log('FAILURE!!')
        })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';
.profile {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 0 $container_padding;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
  }

  &__user {
    position: sticky;
    top: 100px;
    align-self: flex-start;
    width: 30%;

    @media (max-width: 1000px) {
      position: static;
      display: flex;
      width: 100%;
      margin: 0 0 50px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  &__block {
    @media (max-width: 1000px) {
      margin-left: 50px;
    }

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }

  &__actions {
    width: 100%;
    margin-left: 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      width: 70%;
      margin-left: 1rem;
    }
  }

  &__secondary-title {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  &__img {
    width: 200px;
    height: 300px;

    @media (max-width: 600px) {
      margin-bottom: 40px;
    }
  }

  &__title {
    margin: 30px 0 20px;
  }

  &__title,
  &__text {
    color: $text;
  }

  &__text--grey {
    color: $marigold;
  }

  &__link {
    color: $text;
  }

  &__input-img {
    background: $text;
    color: $space-cadet;
  }

  &__btn {
    color: $text;
    border: 1px solid $text;
    padding: 3px 15px
  }
}
</style>
