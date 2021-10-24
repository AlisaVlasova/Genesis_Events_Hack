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