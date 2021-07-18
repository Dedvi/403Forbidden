<template>
  <div class="w-full pl-10">
    <article-grid title="Articles" :articles="articles" />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth : 'guest',
  auth: true,
  layout: "loggedin",
  async asyncData({ $axios }) {
    const articles = await $axios.$get("/api/v1/articles");
    return { articles };
  },
  created() {
    this.$store.commit("CHANGE_BACKGROUND_LAYOUT", true);
  }
};
</script>

<style></style>
