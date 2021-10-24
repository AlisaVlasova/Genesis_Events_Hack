<template>
  <div class="banner">
    <div class="banner__img">
      <img
        src="@/assets/img/img-5.png"
        alt=""
      >
    </div>
    <div class="banner__description">
      <h1 class="banner__title primary-title">
        Check this out!<br>
        Closest events in your city
      </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';

  .banner {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 48px);
    padding: 16px 0;

    @media (min-width: 769px) {
      flex-direction: row;
      padding: 64px 16px;
    }

    &__img {
      position: relative;
      height: fit-content;
      margin-right: 32px;
      margin-bottom: 32px;

      @media (min-width: 1025px) {
        margin-right: 64px;
        margin-bottom: 0;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: -16px;
        right: -32px;
        background-color: $tangerine;
        z-index: 0;
      }

      img {
        position: relative;
        z-index: 1;
        background: $text;
      }
    }

    &__description {
      @media (min-width: 1025px) {
        max-width: 60%;
      }
    }

    &__title {
      padding: 0 $container_padding;
    }
  }
</style>