<template>
  <section v-if="event" class="event">
    <div class="event__info">
      <div>
        <img :src="event.img" />
      </div>
      <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.city }}</p>
      </div>
    </div>

    <div class="event__comments">
      <LazyCommentsList v-if="commentsList.length > 0" :comments="commentsList" />
      <VNoItems v-else essence="comments" />
    </div>
  </section>
</template>
<script>
export default {
    async asyncData({ $http, params }) {
      const event = await $http.$get(
        `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/events/${params.id}.json`
      )

      const comments = await $http.$get(
        `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/comments/${params.id}.json`
      )

      return { event, comments }
    },

  computed: {
    commentsList() {
      console.log(Object.values(this.comments));
      return Object.values(this.comments)
    }
  },
}
</script>

<style scoped lang="scss">

</style>