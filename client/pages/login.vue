<template>
<div class="h-screen bg-white max-w-screen-12xl w-full mx-auto px-10 py-5 flex flex-col">
  <div class="flex items-center justify-between">
    <nuxt-link to="/" class="block">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </nuxt-link>
    <nuxt-link to="/signup" class="block bg-yellow-500 text-blue-900 py-3 px-6 text-center uppercase font-bold text-lg rounded-3xl">Sign up</nuxt-link>
  </div>
  <div class="flex flex-1 justify-center items-center">
    <div class="w-full max-w-md">
      <h1 class="text-yellow-500 tracking-wide text-5xl font-bold text-center mb-12">Log in</h1>
      <form @submit.prevent="userLogin">
        <div class="flex flex-col mt-6">
          <label class="m-2" for="email">Email</label>
          <input class="rounded-3xl border-2 border-dark-50 border-opacity-10 bg-gray-50" type="text" name="email" placeholder="Email" v-model="login.email" />
        </div>
        <div class="flex flex-col mt-2">
          <label class="m-2" for="password">Password</label>
          <input class="rounded-3xl border-2 border-dark-50 border-opacity-10 bg-gray-50" type="text" name="password" placeholder="Password" v-model="login.password" />
        </div>
        <button class="mt-12 block bg-yellow-500 text-blue-900 py-4 w-full text-center uppercase font-extrabold text-xl rounded-3xl" type="submit">Log in</button>
      </form>
      <div class="mt-6 flex items-center justify-center">
        <div class="w-full h-0.5 bg-gray-200 flex flex-1 mr-2"></div>
        <span class="text-lg font-bold text-gray-300">OR</span>
        <div class="w-full h-0.5 bg-gray-200 flex flex-1 ml-2"></div>
      </div>
      <button class="mt-6 border-4 border-dark-50 border-opacity-25 flex items-center justify-center bg-white text-blue-400 py-4 w-full text-center uppercase font-bold text-xl rounded-3xl" @click.prevent="googleAuth">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" viewBox="0 0 24 24" width="24" height="24">
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
          </g>
        </svg>
        Login with Google
      </button>
      <p class="mt-6 text-center font-base text-gray-600">By signing in to Artilingo, you agree to our Terms and Privacy Policy.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      login: {
        email: '403@team.com',
        password: '12345678'
      },
      loading: false
    }
  },
  methods: {
    googleAuth(){
      alert("Feature Coming Soon...!")
    },
    async userLogin() {
      try {
        this.loading = true
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        this.loading = false
        console.error(err)
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>