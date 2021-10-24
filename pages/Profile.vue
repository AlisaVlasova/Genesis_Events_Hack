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
        <!--
        // <input
        //   type="file"
        //   id="avatar"
        //   name="avatar"
        //   @change="inputAvatar"
                <label class="profile__text" for="avatar"
          >Choose an URL for a new avatar:</label
        >
        <input
          class="profile__input-img"
          type="text"
          id="avatar"
          name="avatar"
          @keyup.enter="test"
        />
        // /> -->
      </div>
    </aside>

    <div class="profile__actions">
      <!-- <Search /> -->
      <!-- <ConnectedEventsList
        v-if="isAdmin"
        :connectedEvents="user.connectedEvents"
      /> -->
      <event-list :events="eventList" />

      <UserList v-if="user.role === 'creator'" :users="getUsers" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
//   inputAvatar(event) {
//       console.log(event.target.files[0]);

//       const formData = new FormData()

//   formData.append('action', 'createAppointments')
//   formData.append('locationId', this.currentId)
//   formData.append('file', this.file, this.name)
//   formData.append('run', true)

//   console.log(formData);
// //   api({
// //     method: 'post',
// //     url: '/upload',
// //     data: formData,
// //     headers: {
// //       Accept: 'application/json',
// //       'Content-Type': 'multipart/form-data',
// //     },
// //   }).then(() => {
// //     console.log('OK');
// //   }, (err) => console.log(err))

//   }
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.profile {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 0 2rem;

  @media (max-width: 1000px) {
      flex-direction: column;
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
    // align-self: flex-end;
    width: 70%;
    margin-left: 1rem;
    //transform: translateY(-550px);
    display: flex;
    flex-direction: column;
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
