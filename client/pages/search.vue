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
  },
  created(){
    this.$store.commit('CHANGE_BACKGROUND_LAYOUT', false)
    this.$store.commit('SHOW_SEARCH_BAR', true)
  }
}
</script>

<style>

</style>