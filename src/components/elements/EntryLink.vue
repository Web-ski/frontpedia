<template>
  <router-link class="entry-link" :to="link">
    {{ link }}
  </router-link>
</template>

<script>
export default {
  name: "EntryLink",
  props: {
    link: String,
  },
};
</script>

<style>
.entry-link {
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  margin: 10px 5px;
  color: white;
  background-color: #2c73d4;
  border-radius: 20px;
  padding: 7px 12px;
}

@media screen and (min-width: 670px) {
  .entry-link {
    font-size: 1.1rem;
  }
}
</style>