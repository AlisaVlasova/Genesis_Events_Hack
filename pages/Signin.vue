<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="data.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="data.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <nuxt-link to="/registration">Регистрация</nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['setToken']),

    async userLogin() {
      await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_ryyBF1moAH7aDEl0E4bNzf8tvAMrJqQ',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.data), // body data type must match "Content-Type" header
        }
      )
        .then((response) => response.json())
        .then((json) => this.setToken(json.idToken))
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

input {
  background-color: $text;
}
</style>