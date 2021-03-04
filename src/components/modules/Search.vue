<template>
  <div class="search">
    <InputSearch />
    <ButtonSearch />
  </div>
</template>

<script>
import InputSearch from "../elements/InputSearch";
import ButtonSearch from "../elements/ButtonSearch";
export default {
  name: "Search",
  components: {
    InputSearch,
    ButtonSearch,
  },
};
</script>

<style>
.search {
  height: 46px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 10px;
}
</style>