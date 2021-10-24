<template>
  <div class="signin">
    <form autocomplete="off" class="signin__form form" @submit.prevent="userLogin">
      <div class="form__field">
        <label class="form__label">Username</label>
        <input class="form__input" type="email" v-model="data.email" required />
      </div>
      <div class="form__field">
        <label class="form__label">Password</label>
        <input class="form__input" type="password" v-model="data.password" minlength="6" required />
      </div>
      <div>
        <button class="form__button" type="submit">Submit</button>
      </div>

      <div class="form__link">
        <nuxt-link class="link" to="/signup">Signup</nuxt-link>
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
    async userLogin() {
      try {
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_ryyBF1moAH7aDEl0E4bNzf8tvAMrJqQ',
          {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify(this.data), // body data type must match "Content-Type" header
          }
        )
        console.log({response})
      } catch (err) {
        // console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';

  .signin {
    min-height: calc(100vh - 112px);
    display: flex;
    flex-direction: column;
  }
</style>