<template>
  <ul class="profile-list">
    <li v-for="(user, i) of users" :key="i" class="profile__item">
      <img class="profile-list__img" :src="user.img" alt="avatar" />
      <div class="profile-list__description">
        <h3 class="profile=list__title">
          {{ user.name }}
        </h3>
        <p class="profile-list__text">Location: {{ user.location }}</p>

        <p class="profile-list__text">Age: {{ user.age }}</p>

        <div class="profile-list__bottom">
          <ul class="profile-list__tags">
            <li
              v-for="tag of user.favoriteTags"
              :key="tag"
              class="profile-list__tag"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';

.profile-list {
  &__item {
    display: flex;
    padding: 24px 32px;
    max-width: 100%;
  }

  &__img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    object-position: 50% 50%;
    margin-right: 48px;
  }

  &__description {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 100%;
    color: $tangerine;

    @media (min-width: 769px) {
      margin-bottom: 32px;
      font-size: 50px;
    }
  }

  &__text {
    color: $text;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
  }

  &__tags {
    display: flex;
    gap: 8px;
    max-width: 50%;
    margin-right: 16px;
  }

  &__tag {
    background-color: $purple-navy;
    color: $text;
    padding: 4px 8px;
    border-radius: 8px;
    text-align: center;
  }

  &__date {
    color: $tangerine;
  }
}
</style>
