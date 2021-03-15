<template>
  <li class="entry-source">
    <a class="entry-source" :href="source.link" target="_blank">{{
      source.text
    }}</a>
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
  font-size: 0.9rem;
  line-height: 140%;
  margin: 8px 0;
}

@media screen and (min-width: 670px) {
  .entry-source {
    font-size: 1rem;
  }
}
</style>