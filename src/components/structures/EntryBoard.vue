<template>
  <div class="entry-board">
    <h1 class="entry-title">{{ record.title }}</h1>
    <section class="entry-main">
      <article class="entry-body">
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
        <div class="entry-links">
          <EntryLink
            v-for="link in record.linkEntries"
            :key="link"
            :link="link"
          >
            {{ link }}
          </EntryLink>
        </div>
      </article>
      <aside class="entry-aside">
        <img class="entry-aside__image" :src="url + record.image" />
        <a class="entry-aside__link" :href="record.aside.link">{{
          record.aside.text
        }}</a>
      </aside>
    </section>
  </div>
</template>

<script>
import store from "../../api/store";
import EntryLink from "../elements/EntryLink";

export default {
  name: "EntryBoard",
  components: {
    EntryLink,
  },
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
  flex-direction: column;
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

.entry-main {
  display: flex;
  flex-direction: column-reverse;
}

.entry-body,
.entry-aside {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 1000px;
  padding: 20px;
  margin: 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  color: black;
}

.entry-aside {
  align-items: center;
  margin: 0 0 20px 0;
}

.entry-title {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 10px;
}

.entry-aside__image {
  width: 50px;
  height: 50px;
  margin: 0;
}

@media screen and (min-width: 670px) {
  .entry-main {
    display: flex;
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