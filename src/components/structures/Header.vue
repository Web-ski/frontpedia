<template>
  <div id="header">
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
  min-width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
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