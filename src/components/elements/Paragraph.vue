<template>
  <p :class="small ? 'paragraph--small' : 'paragraph'">
    <template v-if="typeof text === 'object'">
      <template v-for="item in text">
        <strong v-if="item.strong" :key="item.strong">{{ item.strong }}</strong>
        <router-link
          class="paragraph__link"
          v-if="item.link"
          :to="item.href"
          :key="item.link"
        >
          <span class="paragraph__button" v-on:click="setEntry(item.href)">
            {{ item.link }}
          </span>
        </router-link>
        <template v-if="item.text">{{ item.text }}</template>
      </template>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </p>
</template>

<script>
import store from "../../api/store";

export default {
  name: "Paragraph",
  props: {
    text: [String, Array, Object],
    small: Boolean,
  },
  methods: {
    setEntry: (name) => {
      let pageName = name.toLowerCase();
      return store.dispatch("getSingleEntry", pageName);
    },
  },
};
</script>

<style>
.paragraph {
  color: #333;
  font-size: 1.1rem;
  line-height: 150%;
}

.paragraph--small {
  font-size: 1rem;
  line-height: 140%;
}

.paragraph__link {
  text-decoration: none;
}

.paragraph__button {
  font-size: inherit;
  color: royalblue;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2;
}

.paragraph__button:hover {
  text-decoration: underline;
}

@media screen and (min-width: 670px) {
  .paragraph {
    font-size: 1.2rem;
  }

  .paragraph--small {
    font-size: 1rem;
    line-height: 140%;
  }
}
</style>