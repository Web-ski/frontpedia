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
  margin: 5px;
  min-width: 80px;
  text-align: center;
  color: white;
  background-color: #111;
  border-radius: 20px;
  padding: 9px 12px;
  transition: 0.2s;
}

.entry-link:hover {
  background-color: white;
  color: #111;
}

@media screen and (min-width: 670px) {
  .entry-link {
    font-size: 1.1rem;
  }
}
</style>