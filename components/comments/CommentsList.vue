<template>
  <section class="comments">
    <h2 class="comments__title">Comments: </h2>
    <ul class="comments__list">
      <li
        v-for="(comment, i) of comments"
        :key="i"
        class="comments__item"
      >
        <h1>{{comment.author}}</h1>
        <p class="comments__text">{{comment.text}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => []
    },
  },

  fetchOnServer: false,
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_vars.scss';

.comments {
  &__title {
    margin-top: 20px;
    color: $text;
  }

  &__item {
    background: #fff;
    border-radius: 10px;
    margin: 20px 0;
    padding: 10px;
    color: $space-cadet;
  }

  &__text {
    margin-top: 15px;
  }
}

    

</style>
