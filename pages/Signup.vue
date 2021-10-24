<template>
  <div class="signup">
    <form autocomplete="off" class="signup__form form" method="post" @submit.prevent="register">
      <div class="form__field">
        <label class="form__label">Name</label>
          <input
            type="text"
            class="form__input"
            name="name"
            v-model="bio.name"
            required
          />
      </div>
      <div class="form__field">
        <label class="form__label">Age</label>
          <input
            type="number"
            class="form__input"
            name="age"
            v-model="bio.age"
            required
          />
      </div>
      <div class="form__field">
        <label class="form__label">Short bio</label>
          <textarea
            class="form__input"
            name="text"
            v-model="bio.bio"
            required
          ></textarea>
      </div>
      <div class="form__field">
        <label class="form__label">Email</label>
          <input
            type="email"
            class="form__input"
            name="email"
            v-model="data.email"
            required
          />
      </div>
      <div class="form__field">
        <label class="form__label">Password</label>
          <input
            type="password"
            class="form__input"
            name="password"
            minlength="6"
            v-model="data.password"
            required
          />
      </div>
      <div class="form__control">
        <button type="submit" class="form__button is-dark is-fullwidth">
          Register
        </button>
      </div>
      <div class="form__checkbox">
        <v-checkbox
          v-model="creator"
          @change="changeRole"
          color="#fff"
          hide-details
        ></v-checkbox>
        <p>Are you event creator?</p>
      </div>
      <div class="form__link" style="margin-top: 20px">
        Already got an account? <nuxt-link class="link" to="/signin">Login</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      creator: false,
       data: {
        email: '',
        password: '',
        returnSecureToken: true,
      },
      bio: {
        age: '',
        name: '',
        bio: '',
        role: 'user',
        id: '',
      },
    }
  },

  methods: {
    changeRole() {
      if (this.creator) {
        this.data.role = 'creator';
      } else {
        this.data.role = 'user';
      }
    },
    async register() {
      this.bio.id = this.data.email;
      
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_ryyBF1moAH7aDEl0E4bNzf8tvAMrJqQ',
          {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(this.data), // body data type must match "Content-Type" header
          }
        );
        const responsebio = await fetch(
          'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/users.json',
          {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(this.bio), // body data type must match "Content-Type" header
          }
        )
        console.log(responsebio, response);
        this.$router.push('/signin');
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';
  .signup {
    min-height: calc(100vh - 112px);
    display: flex;
    flex-direction: column;

    .form__checkbox {
      display: flex;
      align-items: center;
      color: #fff;

      p {
        margin: 20px 0 0 20px;
      }
    }
  }
</style>