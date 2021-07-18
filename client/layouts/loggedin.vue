<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-white flex">
      <div class="bg-blue-gray-900 w-72 flex-none flex items-center justify-center"><logo/></div>
      <div>Rest of the top bar</div>
    </div>
    <div class="flex-1 bg-white flex">
      <div class="bg-blue-gray-900 text-white w-72 flex-none">
        Sidebar
      </div>
      <main><Nuxt /></main>
    </div>
    <!-- <logo/>
    <div>My blog navigation bar here</div> -->
  </div>
</template>

<script>
export default {
  name: 'loggedin'
}
</script>