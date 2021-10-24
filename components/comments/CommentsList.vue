<template>
  <div>
    <button>Add Comment</button>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>

    <ul v-else>
      {{
        comments.text
      }}
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
    }
  },

  async fetch() {
    this.comments = await this.$http.$get(
      `https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/comments/11231431.json`
    )

    // console.log(data)
    // if (!response.ok) {
    //   throw new Error(data.message || 'Could not get comments.')
    // }

    // for (const key in data) {
    //   const commentObj = {
    //     id: key,
    //     ...data[key],
    //   }
    // <li v-for="(comment, index) in comments" :key="index">
    //   {{ comment.text }}
    // </li>

    //   this.comments.push(commentObj)
    // }
    // console.log(this.comments)
  },
  fetchOnServer: false,
}
</script>
