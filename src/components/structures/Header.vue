<template>
  <div id="header">
    <div>
      <div class="brand">front</div>
      <div class="brand">pedia</div>
    </div>
    <nav>
      <router-link class="nav-link" to="/">strona główna</router-link>
      <router-link class="nav-link" to="/about">o projekcie</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
#header {
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 2px 0px;
  margin: 0 10px;
  border-bottom: solid 1px transparent;
}

.nav-link:hover {
  border-bottom: solid 1px white;
}

.router-link-exact-active {
  border-bottom: solid 1px white;
}

.brand {
  line-height: 100%;
  color: white;
  font-family: "Poppins", sans-serif;
}
</style>