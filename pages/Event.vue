<template>
  <div>
    <h1>{{ event.title }}</h1>
    <img :src="event.img" />
    <p>{{ event.city }}</p>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, params }) {
    const event = await $http.$get(
      'https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events/112314314.json'
    )
    return { event }
  },
}
</script>
