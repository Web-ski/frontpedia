<template>
  <main id="entry">
    <EntryBoard />
  </main>
</template>

<script>
import EntryBoard from "../structures/EntryBoard";
import store from "../../api/store";

export default {
  name: "Entry",
  components: { EntryBoard },
  watch: {
    "$route.params.id": function(id) {
      let name = id;
      let pageName = name.toLowerCase();
      return store.dispatch("getSingleEntry", pageName);
    }
  },
  created() {
    let name = this.$route.params.id;
    let pageName = name.toLowerCase();
    return store.dispatch("getSingleEntry", pageName);
  }
};
</script>

<style>
#entry {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-height: 80vh;
}
</style>