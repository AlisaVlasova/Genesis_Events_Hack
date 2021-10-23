<template>
  <div class="search">
    <v-toolbar
    dark
    >
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_vars.scss';

  .search {
    .v-toolbar {
      background: $space-cadet;
      box-shadow: none;
    }
  }
</style>