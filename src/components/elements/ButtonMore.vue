<template>
  <button class="button-more">Więcej</button>
</template>

<script>
export default {
  name: "ButtonMore",
};
</script>

<style>
.button-more {
  border: none;
  color: #444;
  height: 40px;
  width: 120px;
  border-radius: 12px;
  cursor: pointer;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 2px 10px 0 rgba(70, 7, 107, 0.17);
  font-family: Lato, sans-serif;
  border: 2px solid rgba(255, 255, 255, 0.18);
  transition: 0.2s;
}

.button-more:hover {
  box-shadow: 0 0px 0px 0 rgba(70, 7, 107, 0.17);
}
</style>