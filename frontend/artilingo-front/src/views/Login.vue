<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/LoginComponets.vue'

export default {
  name: 'Login',
  components: {
    Login
  }
}
</script>