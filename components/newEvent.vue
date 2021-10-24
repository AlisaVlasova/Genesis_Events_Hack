<template>
  <div class="addEvent">
    <form
      autocomplete="off"
      class="addEvent__form form"
      @submit.prevent="addEvent"
    >
      <div class="form__field">
        <label class="form__label">City</label>
        <input v-model="data.city" class="form__input" type="text" />
      </div>
      <div class="form__field">
        <label class="form__label">Date</label>
        <input v-model="data.date" class="form__input" type="date" @change="changeDate" />
      </div>
      <div class="form__field">
        <label class="form__label">Description</label>
        <textarea v-model="data.description" class="form__input" />
      </div>
      <div class="form__field">
        <label class="form__label">Image</label>
        <input v-model="data.img" class="form__input" type="url" />
      </div>
      <div class="form__field">
        <label class="form__label">Owner</label>
        <input v-model="data.owner" class="form__input" type="text" />
      </div>
      <div class="form__field">
        <label class="form__label">Payment</label>
        <input v-model="data.payment" class="form__input" type="text" />
      </div>
      <div class="form__field form__field--checkbox">
        <h3 class="form__label">Tags:
          <div>
            <label class="form__label--tag" for="movie"
              >#movie
              <input
                id="movie"
                v-model="data.tag"
                class="form__input"
                type="checkbox"
                value="Movie"
              />
            </label>
            <label class="form__label--tag" for="free"
              >#free
              <input
                id="free"
                v-model="data.tag"
                class="form__input"
                type="checkbox"
                value="Free"
              />
            </label>

            <label class="form__label--tag" for="kyiv"
              >#kyiv
              <input
                id="kyiv"
                v-model="data.tag"
                class="form__input"
                type="checkbox"
                value="Kyiv"
              />
            </label>
          </div>
        </h3>
      </div>
      <div class="form__field">
        <label class="form__label">Title</label>
        <input v-model="data.title" class="form__input" type="text" />
      </div>
      <div class="form__field">
        <label class="form__label">Type</label>
        <input v-model="data.type" class="form__input" type="text" />
      </div>
      <div>
        <button class="form__button" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        city: '',
        date: '',
        description: '',
        img: '',
        owner: '',
        payment: '',
        tag: [],
        title: '',
        type: '',
      },
    }
  },
  methods: {
    changeDate(event) {
      this.data.date = this.$dayjs(event.date).utc();
    },
    async addEvent() {
      try {
        const response = await fetch(
          'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.data), // body data type must match "Content-Type" header
          }
        )
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.addEvent {
  min-height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;

  .form {
    max-width: 100%;

    &__label--tag {
      color: $tangerine;
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
}
</style>