<template>
  <div class="addEvent">
    <form
      autocomplete="off"
      class="addEvent__form form"
      @submit.prevent="addEvent"
    >
      <div class="form__field">
        <label class="form__label">Your name</label>
        <input v-model="data.user" class="form__input" type="text" />
      </div>
      <div class="form__field">
        <label class="form__label">Comment</label>
        <textarea v-model="data.comment" class="form__input" />
      </div>
      <div>
        <button class="form__button" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props:['eventId'],
  data: () => ({
    data: {
        user:'',
        comment:''
      },
  }),
  methods: {
    async addEvent() {
      try {
        const response = await fetch(
          `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/${this.$nuxt.$route.path}.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.data), // body data type must match "Content-Type" header
          }
        )
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.addEvent {
  // min-height: calc(100vh - 112px);

  display: flex;
  flex-direction: column;
}
</style>