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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
</style>
