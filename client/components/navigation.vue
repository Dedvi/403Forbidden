<template>
  <div class="border-2 border-black border-opacity-10 shadow-xl py-6 px-12 flex items-center justify-between">
    <text-only-logo class="h-auto w-42" />
    <div class="flex space-x-8">
      <nuxt-link to="/login" class="motion-safe:transition ease-in-out duration-300 block bg-transparent border-3 border-yellow-500 hover:border-white text-white py-3 px-6 text-center uppercase font-bold text-lg rounded-3xl">Sign in</nuxt-link>
      <nuxt-link to="/signup" class="motion-safe:transition ease-in-out duration-300 block bg-yellow-500 border-3 border-yellow-500 hover:border-white hover:bg-white text-blue-blue-gray-900 py-3 px-6 text-center uppercase font-bold text-lg rounded-3xl">Sign up</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>