<template>  
  <div id="app">
    <login-componets/>
  </div>
</template>

<script>
import LoginComponets from './components/LoginComponets.vue';

export default {
  name: "App",
  components: {
    LoginComponets
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6px;
}
</style>