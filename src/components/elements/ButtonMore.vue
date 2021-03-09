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
  color: #444;
  height: 40px;
  width: 120px;
  border-radius: 25px;
  cursor: pointer;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px 0 rgba(70, 7, 107, 0.17);
  transition: 0.2s;
  background-color: #07d9dc;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.05) rgba(0, 0, 0, 0.05)
    rgba(255, 255, 255, 0.3);
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

.button-more:hover {
  box-shadow: 0 0px 0px 0 rgba(70, 7, 107, 0.17);
}
</style>