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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Lato:wght@300;400;700;900&display=swap");
body {
  margin: 0;
}
#app {
  background-color: #f6f2e8;
  background-image: linear-gradient(to bottom right, #07d9dc, #2c73d4);
  background-image: radial-gradient(
      circle at 45% 67%,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.02) 3%,
      transparent 3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 16% 36%,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 3%,
      transparent 3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 64%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 88% 23%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 43% 26%,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 66% 45%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 71% 41%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 89% 76%,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 70% 62%,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 88% 20%,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.02) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 91%,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.02) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 4%,
      rgba(255, 255, 255, 0.01) 0%,
      rgba(255, 255, 255, 0.01) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 61%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 48% 96%,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.02) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 61%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 44% 44%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 20% 19%,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.02) 5%,
      transparent 5%,
      transparent 100%
    ),
    linear-gradient(157deg, rgb(76, 234, 243), rgb(31, 56, 127));
  min-height: 100vh;
  color: rgb(26, 59, 167);
  color: white;
  font-family: Lato, sans-serif;
}
</style>
/* https://www.gradientmagic.com/collection/popular/gradient/1599427515870 */