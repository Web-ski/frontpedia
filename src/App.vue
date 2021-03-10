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
  created() {
    this.$store.dispatch("getAllPosts", "./mockupContent.json");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

body {
  margin: 0;
}
#app {
  background-color: blueviolet;
  min-height: 100vh;
  color: rgb(26, 59, 167);
  color: #222;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;
}
</style>
/* https://www.gradientmagic.com/collection/popular/gradient/1599427515870 */