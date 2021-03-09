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
  height: 30px;
  cursor: pointer;
  transition: 0.2s;
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  border-bottom: solid 2px transparent;
  line-height: 110%;
}

.button-more:hover {
  border-bottom: solid 2px #444;
}
</style>