<template>
  <div id="header">
    <div class="brand">frontped:a</div>
    <nav>
      <router-link class="nav-link" to="/"> home</router-link>
      <router-link class="nav-link" to="/about">about</router-link>
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
  color: rgb(26, 59, 167);
  padding: 8px 10px;
  border: solid 1px transparent;
}

.nav-link:hover {
  border: solid 1px rgb(26, 59, 167);
}

.router-link-exact-active {
  border: solid 1px rgb(26, 59, 167);
}

.brand {
  padding: 8px;
  color: rgb(26, 59, 167);
  font-family: Comfortaa, sans-serif;
}
</style>