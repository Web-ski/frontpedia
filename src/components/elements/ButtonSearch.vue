<template>
  <button class="button-search" type="submit"></button>
</template>

<script>
export default {
  name: "ButtonSearch",
};
</script>

<style>
.button-search {
  display: inline-block;
  min-height: 46px;
  width: 46px;
  padding: 5px;
  border: solid 1px rgb(26, 59, 167);
  border-left: none;
  background-color: transparent;
  background-image: url("../../assets/search.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

@media screen and (min-width: 670px) {
  .button-search {
    font-size: 18px;
  }
}
</style>