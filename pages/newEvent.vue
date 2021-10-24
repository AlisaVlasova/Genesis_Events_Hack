<template>
  <div>
    <form @submit.prevent="addEvent">
      <div>
        <label>City</label>
        <input type="text" v-model="data.city" />
      </div>
      <div>
        <label>Date</label>
        <input type="date" v-model="data.date" />
      </div>
      <div>
        <label>Description</label>
        <textarea v-model="data.description" />
      </div>
      <div>
        <label>Image</label>
        <input type="url" v-model="data.img" />
      </div>
      <div>
        <label>Owner</label>
        <input type="text" v-model="data.owner" />
      </div>
      <div>
        <label>Payment</label>
        <input type="text" v-model="data.payment" />
      </div>
      <div>
        <label>Tag</label>
        <input type="checkbox" id="movie" value="Movie" v-model="data.tag" />
        <label for="movie">#movie</label>
        <input type="checkbox" id="free" value="Free" v-model="data.tag" />
        <label for="free">#free</label>
        <input type="checkbox" id="kyiv" value="Kyiv" v-model="data.tag" />
        <label for="kyiv">#kyiv</label>
      </div>
      <div>
        <label>Title</label>
        <input type="text" v-model="data.title" />
      </div>
      <div>
        <label>Type</label>
        <input type="text" v-model="data.type" />
      </div>
      <div>
        <button type="submit">Submit</button>
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
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>