<template>
  <div class="flex flex-col min-h-screen" :class="dottedBg ? 'dotted-bg' : ''">
    <div class="flex">
      <div class="bg-blue-gray-900 w-80 flex-none flex items-center justify-center">
        <logo class="h-auto w-full mx-16 my-8"/>
      </div>
      <application-topbar />
    </div>
    <div class="flex-1 flex">
      <sidebar class="bg-blue-gray-900 w-80 flex-none"/>
      <main class="flex-1 overflow-y-auto">
        <Nuxt />
      </main>
    </div>
    <!-- <logo/>
    <div>My blog navigation bar here</div> -->
  </div>
</template>

<script>
export default {
  name: 'loggedin',
  computed: {
    dottedBg() {
        return this.$store.state.dottedLines;
    }
  }
}
</script>

<style scoped>
.dotted-bg{
  background: url('../static/lined-bg.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>