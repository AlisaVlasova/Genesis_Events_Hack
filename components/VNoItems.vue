<template>
  <p class="no-items">No {{ essence }} yet.</p>
</template>

<script>
export default {
  props: {
    essence: {
      type: String,
      default: 'items',
    },
  },
}
</script>

<style scoped>
.no-items {
  color: #fff;
  font-weight: 600;
  font-size: 2em;
  text-align: center;
}
</style>
