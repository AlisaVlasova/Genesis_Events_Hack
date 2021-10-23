<template>
  <section class="profile">
    <aside class="profile__user">
      <div class="profile__adaptiv-img">
        <img
          class="profile__img"
          src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
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
          <span class="profile__text_grey">Position: </span>Front-End developer
        </p>
        <p class="profile__text">
          <a class="profile__link" href="https://telegram.me/LEONID_Schwab">
            <span class="link__part">
              <span class="profile__text_grey">Telegram:&nbsp;</span
              >@LEONID_Schwab
            </span>
          </a>
        </p>
        <p class="profile__text">
          <a
            class="profile__link"
            href="tel:+380978551445"
            style="display: none"
          >
            <svg
              class="profile__icon"
              fill="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M366,0H146c-20.678,0-37.5,16.822-37.5,37.5v437c0,20.678,16.822,37.5,37.5,37.5h220c20.678,0,37.5-16.822,37.5-37.5v-437
                                        C403.5,16.822,386.678,0,366,0z M388.5,407H176c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h212.5v52.5
                                        c0,12.407-10.093,22.5-22.5,22.5H146c-12.407,0-22.5-10.093-22.5-22.5V422H146c4.142,0,7.5-3.358,7.5-7.5
                                        c0-4.142-3.358-7.5-7.5-7.5h-22.5V75h265V407z M388.5,60h-265V37.5c0-12.407,10.093-22.5,22.5-22.5h220
                                        c12.407,0,22.5,10.093,22.5,22.5V60z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M286,30h-30c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h30c4.142,0,7.5-3.358,7.5-7.5
                                        C293.5,33.358,290.142,30,286,30z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M256,437c-12.407,0-22.5,10.093-22.5,22.5c0,12.407,10.093,22.5,22.5,22.5s22.5-10.093,22.5-22.5
                                        C278.5,447.093,268.407,437,256,437z M256,467c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5
                                        S260.136,467,256,467z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="226" cy="37.5" r="7.5" />
                </g>
              </g>
            </svg>
            <span class="link__part">
              <span class="profile__text_grey">Phone: </span>+38(097)-855-1445
            </span>
          </a>
        </p>

        <!-- <label for="avatar">Choose a profile picture:</label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          @change="inputAvatar"
        /> -->

        <label class="profile__text" for="avatar">Choose an URL with a picture:</label>
    <p>{{urlOfAvatar}}</p>
        <input
          type="text"
          id="avatar"
          name="avatar"
          v-model.lazy="urlOfAvatar"
        /> 
      </div>
    </aside>

    <aside class="profile__actions">
      <!-- <Search /> -->
      <EventList :events="getEvents" />
    </aside>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            urlOfAvatar: ''
        }
    },
    computed: {
    ...mapGetters([
      'getEvents',
    ]),
  },
  methods: {
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
  justify-content: space-between;
  min-height: 100vh;

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

  &__actions {
    width: 70%;
  }
}
</style>