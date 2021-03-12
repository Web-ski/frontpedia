<template>
  <main class="main-container">
    <slot />
  </main>
</template>

<script>
export default {
  name: "MainTemplate",
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 80vh;
}
</style>
