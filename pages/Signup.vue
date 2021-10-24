<template>
  <div class="signup">
    <form autocomplete="off" class="signup__form form" method="post" @submit.prevent="register">
      <div class="form__field">
        <label class="form__label">Name</label>
          <input
            type="text"
            class="form__input"
            name="name"
            v-model="data.name"
            required
          />
      </div>
      <div class="form__field">
        <label class="form__label">Age</label>
          <input
            type="number"
            class="form__input"
            name="age"
            v-model="data.age"
            required
          />
      </div>
      <div class="form__field">
        <label class="form__label">Short bio</label>
          <textarea
            class="form__input"
            name="text"
            v-model="data.bio"
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
       data: {
        email: '',
        password: '',
        returnSecureToken: true,
      },
    }
  },

  methods: {
    async register() {
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
        )
        console.log(response);
        this.$router.push('/signin');
      } catch (err) {
        console.log(err)
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
  }
</style>