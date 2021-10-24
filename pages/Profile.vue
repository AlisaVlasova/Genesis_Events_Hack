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
        <label for="avatar">Choose a profile picture:</label>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          v-model="avatar"
          label="Avatar"
        ></v-file-input>
        <button @click="submitAvatar">Save</button>
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
      <!--  <EventList :events="getEvents" /> -->
      <UserList :users="getUsers" v-if="isAdmin" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      avatar: '',
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          'Avatar size should be less than 2 MB!',
      ],
      user: {
        userName: 'Leonid Shvab',
        age: 10,
        bio: 'some bio',
        pic: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
        role: 'admin',
      },
    }
  },
  async asyncData({ $http, params }) {
    const user = await $http.$get(
      `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/users/eqreygqfuqeyg.json`
    )
    return { user }
  },
  computed: {
    ...mapGetters(['getEvents', 'getEndpoint', 'getUsers']),
  },

  isAdmin() {
    return this.user.role === 'admin'
  },

  created() {
    console.log(12)
    console.log(this.getUsers)
  },
  methods: {
    imgSrc() {
      return `https://firebasestorage.googleapis.com/v0/b/kyiv-events-b93ca.appspot.com/o/${this.user.pic}?alt=media`
    },
 
    async submitAvatar()  {
      const formData = new FormData();
      formData.append('file', this.avatar);
      console.log('>> formData >> ', formData);

      // You should have a server side REST API
      await fetch(`https://firebasestorage.clients6.google.com/v0/b/kyiv-events-b93ca.appspot.com/o/${this.user.pic}`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'image/png'
            },
        body: this.avatar
          },
  
        ).then(function () {
          console.log('SUCCESS!!');
        })
        .catch(function () {
          console.log('FAILURE!!');
        });
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
  flex-direction: column;
  min-height: 100vh;

  &__user {
    position: sticky;
    top: 100px;
    align-self: flex-start;
    max-width: 20%;
  }

  &__actions {
    align-self: flex-end;
    max-width: 70%;
    transform: translateY(-550px);
  }

  &__img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    object-position: 50% 50%;
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
}
</style>
