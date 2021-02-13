<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
  //   if(sessionStorage.getItem("loggedIn") === "true"){
  //     if(sessionStorage.getItem("expire_token") >)
  //     this.$store.commit("login", {access_token: sessionStorage.getItem("access_token")})
  //   }else{
  //     this.$store.commit("logout")
  //   }
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
