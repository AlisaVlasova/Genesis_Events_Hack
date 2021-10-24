<template>
  <section class="comments">
    <ul class="comments__list">
      <li
        v-for="(comment, i) of comments"
        :key="i"
        class="comments__item"
      >
        <h1 class="comments__title">{{comment.author}}</h1>
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
  &__item {
    background: #fff;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
    color: $space-cadet;
  }

  &__text {
    margin-top: 15px;
  }
}

    

</style>
