<template>
  <div class="default">
    <Header/>
    <div class="default__container">
      <search />
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
      padding: 16px;
    }

    .search {
      padding-top: 48px;
    }
  }
</style>