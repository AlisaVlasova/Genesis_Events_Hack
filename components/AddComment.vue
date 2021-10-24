<template>
  <div class="addEvent">
    <form
      autocomplete="off"
      class="addEvent__form form"
      @submit.prevent="addComment"
    >
      <div class="form__field">
        <label class="form__label">Your name</label>
        <input class="form__input" type="text" v-model="data.author" />
      </div>
      <div class="form__field">
        <label class="form__label">Comment</label>
        <textarea class="form__input" v-model="data.text" />
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
  data() {
    return {
      data: {
      author:'',
      text:''
      },
    }
  },
  methods: {
    async addComment() {
      try {
        const response = await fetch(
          `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/comments/${this.$nuxt.$route.path.match(/\/([^/]+)\/?$/)[1]}.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.data), // body data type must match "Content-Type" header
          }
        )
        console.log(response)
        this.clear()
      } catch (err) {
        console.log(err)
      }
    },
    clear(){
      this.data.author=""
      this.data.text=""
    }
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