<template>
  <router-link class="entry-link" :to="link">
    <button class="entry-link__button" v-on:click="setEntry(link)">
      {{ link }}
    </button>
  </router-link>
</template>

<script>
import store from "../../api/store";

export default {
  name: "EntryLink",
  props: {
    link: String,
  },
  methods: {
    setEntry: (name) => {
      console.log(name);
      let pageName = name.toLowerCase();
      return store.dispatch("getSingleEntry", pageName);
    },
  },
};
</script>

<style>
.entry-link {
  text-decoration: none;
  display: inline-block;
  margin: 5px;
  min-width: 80px;
  text-align: center;
}

.entry-link__button {
  transition: 0.2s;
  min-width: 80px;
  border: none;
  border-radius: 20px;
  padding: 9px 12px;
  background-color: #111;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.entry-link:hover .entry-link__button {
  background-color: white;
  color: #111;
}

@media screen and (min-width: 670px) {
  .entry-link {
    font-size: 1.1rem;
  }
}
</style>