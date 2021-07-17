<template>
<div class="h-screen bg-white max-w-screen-12xl w-full mx-auto px-10 py-5 flex flex-col">
  <div class="flex items-center justify-between">
    <nuxt-link to="/" class="block">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </nuxt-link>
    <nuxt-link to="/" class="block bg-yellow-500 text-blue-800 py-3 px-6 text-center uppercase font-bold text-lg rounded-2xl">Sign up</nuxt-link>
  </div>
  <div class="flex flex-1 justify-center items-center">
    <div class="w-full max-w-md">
      <h1 class="text-yellow-500 tracking-wide text-5xl font-bold text-center mb-12">Log in</h1>
      <form @submit.prevent="userLogin">
        <div class="flex flex-col mt-6">
          <label class="m-2" for="email">Email</label>
          <input class="rounded-2xl border-2 border-dark-50 border-opacity-10 bg-gray-50" type="text" name="email" placeholder="Email" v-model="login.email" />
        </div>
        <div class="flex flex-col mt-2">
          <label class="m-2" for="password">Password</label>
          <input class="rounded-2xl border-2 border-dark-50 border-opacity-10 bg-gray-50" type="text" name="password" placeholder="Password" v-model="login.password" />
        </div>
        <button class="mt-12 block bg-yellow-500 text-blue-800 py-4 w-full text-center uppercase font-extrabold text-xl rounded-2xl" type="submit">Log in</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: 'me@janiru.dev',
        password: '12345678'
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
        this.$router.push({path: "articles"})
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>