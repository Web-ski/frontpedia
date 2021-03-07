<template>
  <div class="entry-board__container">
    <h1>{{ entry }}</h1>
    {{ record }}
  </div>
</template>

<script>
import store from "../../api/store";

export default {
  name: "EntryBoard",
  props: {
    entry: String,
  },
  computed: {
    record() {
      let vm = this;
      let record = store.state.allRecords.filter(
        (item) => item.title === vm.entry && item
      );
      console.log(record);
      return record;
    },
  },
};
</script>

<style>
</style>