<template>
  <li class="entry-source">
    <a class="entry-source" :href="source.link">{{ source.text }}</a>
  </li>
</template>

<script>
export default {
  name: "EntrySource",
  props: {
    source: Object,
  },
};
</script>

<style>
.entry-source {
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
}

@media screen and (min-width: 670px) {
  .entry-source {
    font-size: 1.1rem;
  }
}
</style>