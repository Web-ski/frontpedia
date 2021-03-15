<template>
  <button class="button-more">Więcej</button>
</template>

<script>
export default {
  name: "ButtonMore",
  props: {
    name: String,
  }
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
  background-image: url("../../assets/right-arrow.svg");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 55%;
  background-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  border-bottom: solid 2px transparent;
  line-height: 110%;
  width: 70px;
  text-align: left;
}

.button-more:hover {
  border-bottom: solid 2px #444;
}
</style>