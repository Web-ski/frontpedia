<template>
  <input class="input-search" />
</template>

<script>
export default {
  name: "InputSearch",
};
</script>

<style>
.input-search {
  font-size: 16px;
  line-height: 22px;
  padding: 5px 10px;
  border: solid 1px rgb(26, 59, 167);
  background-color: rgba(255, 255, 255, 0.1);
}

@media screen and (min-width: 670px) {
  .input-search {
    font-size: 18px;
  }
}
</style>