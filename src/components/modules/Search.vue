<template>
  <div class="search">
    <InputSearch />
    <ImgSearch />
  </div>
</template>

<script>
import InputSearch from "../elements/InputSearch";
import ImgSearch from "../elements/ImgSearch";

export default {
  name: "Search",
  components: {
    InputSearch,
    ImgSearch,
  },
};
</script>

<style>
.search {
  position: relative;
  height: 46px;
  padding: 15px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
</style>