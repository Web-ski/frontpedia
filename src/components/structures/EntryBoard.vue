<template>
  <div class="entry-board">
    <article class="entry-body">
      <h1 class="entry-title">{{ record.title }}</h1>
      <p
        class="entry-body__text"
        v-for="paragraph in record.body"
        :key="paragraph"
      >
        {{ paragraph }}
      </p>
      <h4>Źródła:</h4>
      <ul class="entry-sources">
        <li v-for="source in record.sources" :key="source.link">
          <a :href="source.link">{{ source.text }}</a>
        </li>
      </ul>
      <ul class="entry-links">
        <li v-for="link in record.linkEntries" :key="link">
          <router-link class="card-link" :to="link">
            {{ link }}
          </router-link>
        </li>
      </ul>
    </article>
    <aside class="entry-aside">
      <h2 class="entry-title">{{ record.title }}</h2>
      <img class="entry-aside__image" :src="url + record.image" />
      <a class="entry-aside__link" :href="record.aside.link">{{
        record.aside.text
      }}</a>
    </aside>
  </div>
</template>

<script>
import store from "../../api/store";

export default {
  name: "EntryBoard",
  data() {
    return { url: "/images/" };
  },
  props: {
    entry: String,
  },
  computed: {
    record() {
      let vm = this;
      let choosenRecord = store.state.allRecords.filter(
        (item) => item.title === vm.entry && item
      );
      console.log(choosenRecord);
      return choosenRecord[0];
    },
  },
};
</script>

<style>
.entry-board {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100px;
  min-width: 250px;
  max-width: 1000px;
  padding: 20px;
  margin: 40px auto;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: black;
}

.entry-body,
.entry-aside {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  min-width: 250px;
  max-width: 1000px;
  padding: 20px;
  margin: 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  color: black;
}

.entry-aside {
  margin: 0 0 20px 0;
}

.entry-title {
  font-size: 2rem;
  margin: 0;
}

.entry-aside__image {
  width: 50px;
  height: 50px;
  margin: 0;
}

@media screen and (min-width: 670px) {
  .entry-board {
    flex-direction: row;
  }

  .entry-aside {
    margin: 0 0 0 20px;
  }

  .entry-aside__image {
    width: 70px;
    height: 70px;
    margin: 0;
  }
}
</style>