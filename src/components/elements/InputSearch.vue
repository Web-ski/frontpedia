<template>
  <input
    class="input-search"
    type="text"
    placeholder="Szukaj"
    :value="newValue"
    @input="chooseWord($event.target.value)"
  />
</template>

<script>
import store from "../../api/store";

export default {
  name: "InputSearch",
  data() {
    return {
      newValue: "",
    };
  },
  methods: {
    chooseWord(value) {
      return store.dispatch("setSearch", value);
    },
  },
};
</script>

<style>
.input-search {
  height: 34px;
  font-size: 16px;
  line-height: 18px;
  padding: 5px 12px;
  border: none;
  box-shadow: inset -1px -1px 5px white, inset 2px 2px 5px rgba(0, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  color: #222222;
}

@media screen and (min-width: 670px) {
  .input-search {
    font-size: 18px;
  }
}
</style>