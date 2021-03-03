<template>
  <div id="header">
    <div class="brand">{f}</div>
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
  color: mediumblue;
  margin: 10px;
}
</style>