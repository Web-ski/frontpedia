<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/structures/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
body {
  margin: 0;
}
#app {
  background-color: #f6f2e8;
  min-width: 100vw;
  min-height: 100vh;
  color: mediumblue;
  font-family: Lato, sans-serif;
}
</style>
