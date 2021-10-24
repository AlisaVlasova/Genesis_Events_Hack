<template>
  <section class="profile">
    <aside class="profile__user">
      <div class="profile__adaptiv-img">
        <img
          class="profile__img"
          :src="urlOfAvatar"
          alt="photo"
        />
      </div>

      <div class="profile__block">
        <h3 class="profile__title">Profile Information</h3>
        <p class="profile__text">
          <span class="profile__text_grey">Name: </span>Leonid Shvab
        </p>
        <p class="profile__text">
          <span class="profile__text_grey">Location: </span>Kyiv
        </p>
        <p class="profile__text">
          <span class="profile__text_grey">Age: </span>105
        </p>
        <!-- <label for="avatar">Choose a profile picture:</label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          @change="inputAvatar"
        /> -->

        <label class="profile__text" for="avatar">Choose an URL for a new avatar:</label>
        <input
        class="profile__input-img"
          type="text"
          id="avatar"
          name="avatar"
          @keyup.enter="test"
        /> 
      </div>
    </aside>

    <div class="profile__actions">
      <!-- <Search /> -->
      <EventList :events="getEvents" />
      <UserList :users="getUsers" v-if="isAdmin" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            urlOfAvatar: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png'
        }
    },
    computed: {
    ...mapGetters([
      'getEvents',
      'getUsers'
    ]),

    isAdmin() {
        return true
    }
  },

  created() {
      console.log(12);
    console.log(this.getUsers);  
  },
  methods: {
      test(e) {
          this.urlOfAvatar = e.target.value;
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
  }
}
</script>


<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.profile {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
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