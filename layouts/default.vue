<template>
  <div class="default">
    <Header/>
    <div class="default__container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/main.scss';

  .default {
    width: 100%;
    background: $space-cadet;
    
    &__container {
      max-width: 1440px;
      margin: 0 auto;
      padding-top: 112px;
    }

    .primary-title {
      color: $tangerine;
      font-size: 46px;

      @media (min-width: 1025px) {
        font-size: 80px;
      }
    }

    .secondary-title {      
      color: $tangerine;
      font-size: 40px;

      @media (min-width: 1025px) {
        font-size: 50px;
      }
    }

    .primary-title {
      color: $tangerine;
      font-size: 46px;

      @media (min-width: 1025px) {
        font-size: 80px;
      }
    }

    .secondary-title {      
      color: $tangerine;
      font-size: 40px;

      @media (min-width: 1025px) {
        font-size: 50px;
      }
    }
  }
</style>