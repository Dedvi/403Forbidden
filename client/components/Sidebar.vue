<template>
  <div class="flex flex-col pb-4 px-10">
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/articles">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Home</span>
    </nuxt-link>
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/search">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Search</span>
    </nuxt-link>
    <div class="w-full h-0.5 bg-gray-200 opacity-40 my-4"></div>
    <span class="block text-xl font-semibold mb-5 tracking-wide text-gray-50">Bookmarks</span>
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/create-list">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Create List</span>
    </nuxt-link>
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/Bookmarked">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Bookmarked</span>
    </nuxt-link>
    <div class="w-full h-0.5 bg-gray-200 opacity-40 my-4"></div>
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/profile">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Profile</span>
    </nuxt-link>
    <nuxt-link class="py-4 px-10 -mx-10 flex items-center justify-start group motion-safe:transition ease-in-out duration-300 hover:bg-blue-gray-700" to="/leaderboards">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg> 
      <span class="block text-xl font-medium tracking-wide text-gray-50">Leaderboards</span>
    </nuxt-link>

    <div class="flex items-center w-full rounded-lg mt-auto py-4">
      <img v-if="$auth.user.profile_picture" :src="$auth.user.profile_picture" alt="user name" class="object-cover w-10 h-10 mr-4 border border-white border-solid rounded-full">
      <img v-else src="/user_image.png" alt="user name" class="object-cover w-10 h-10 mr-4 border border-white border-solid rounded-full">
      <div>
        <h2 class="text-sm font-medium tracking-widest text-gray-50 uppercase title-font">{{$auth.user.username}}</h2>
        <p class="text-yellow-500 text-xs">{{$auth.user.points}} Point(s)</p>
        <button class="flex items-center justify-end w-full" @click="logout">
          <span class="text-sm font-medium tracking-widest text-gray-50 uppercase mt-0.5">Logout</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>

</style>