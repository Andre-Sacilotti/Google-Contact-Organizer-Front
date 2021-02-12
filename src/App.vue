<template>
  <div id="app">
    <LoginPage>aa</LoginPage>
  </div>
</template>

<script>
import LoginPage from "@/pages/LoginPage/LoginPage.vue";

export default {
  name: 'App',
  components: {
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #D9D9D9;
}

body { margin: 0;}

</style>
