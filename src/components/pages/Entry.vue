<template>
  <main id="entry">
    <EntryBoard />
  </main>
</template>

<script>
import EntryBoard from "../structures/EntryBoard";

export default {
  name: "Entry",
  components: { EntryBoard },
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