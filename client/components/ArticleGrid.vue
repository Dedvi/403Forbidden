<template>
  <div>
    <h2 class="font-bold text-5xl text-blue-gray-800">{{title}}</h2>
    <div class="mt-8 overflow-x-auto">
      <div class="flex pb-8 -ml-4">
        <single-article-card v-for="article in articles" :article="article" :key="article._id"/>
      </div>
    </div>
  </div>  
</template>

<script>
import SingleArticleCard from '../components/SingleArticleCard.vue'
export default {
  name: "article-grid",
  props: ['articles', 'title'],
  components: {SingleArticleCard},
}
</script>

<style>

</style>