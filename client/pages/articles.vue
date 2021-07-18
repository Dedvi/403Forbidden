<template>
  <div>
    {{articles}}
  </div>
</template>

<script>
export default {
  auth: true,
  layout: 'loggedin',
  async asyncData({ $axios }) {
    const articles = await $axios.$get('/api/v1/articles')
    return { articles}
  }
}
</script>

<style>

</style>