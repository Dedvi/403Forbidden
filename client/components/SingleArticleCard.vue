<template>
  <nuxt-link class="w-full max-w-sm flex-shrink-0 px-4" :to="{ name: 'articles-slug', params: { slug: article.slug }}">
    <article class="bg-blue-gray-900 text-gray-50 rounded-2xl overflow-hidden">
      <div class="aspect-w-5 aspect-h-4">
        <img :src="article.image_url" class="w-full h-full object-cover object-center" :alt="article.name">
      </div>
      <div class="px-3 py-4">
        <h3 class="font-medium">{{ article.name }}</h3>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'single-article-card',
  props: ['article']
}
</script>

<style>

</style>