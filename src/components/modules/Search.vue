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
  margin: 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 2px solid rgba(255, 255, 255, 0.18);
}
</style>