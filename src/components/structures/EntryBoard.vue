<template>
  <div class="entry-board">
    <section class="entry-main">
      <article class="entry-body">
        <h1 class="entry-title">{{ record.title }}</h1>
        <Paragraph
          v-for="paragraph in record.body"
          :key="paragraph"
          :text="paragraph"
        />
        <h4>Źródła:</h4>
        <ul class="entry-sources">
          <EntrySource
            v-for="source in record.sources"
            :key="source.link"
            :source="source"
          />
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
        <div v-for="item in record.aside" :key="item.link.toString()">
          <template v-if="typeof item === 'object'">
            <a class="entry-aside__link" :href="item.link">{{ item.text }}</a>
          </template>
          <template v-else>
            <Paragraph small :text="item" />
          </template>
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
import store from "../../api/store";
import EntryLink from "../elements/EntryLink";
import EntrySource from "../elements/EntrySource";
import Paragraph from "../elements/Paragraph";

export default {
  name: "EntryBoard",
  components: {
    EntryLink,
    EntrySource,
    Paragraph,
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
  padding: 15px;
  margin: 40px auto;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 15px;
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
  background-color: rgba(255, 255, 255, 0.85);
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

.entry-sources {
  padding-left: 20px;
  margin: 0;
  margin-bottom: 20px;
}

.entry-aside__image {
  width: 50px;
  height: 50px;
  margin: 10px;
}

@media screen and (min-width: 670px) {
  .entry-board {
    padding: 20px;
  }
  .entry-main {
    display: flex;
    flex-direction: row;
  }

  .entry-aside {
    margin: 0 0 0 20px;
    text-align: center;
  }

  .entry-aside__image {
    width: 70px;
    height: 70px;
  }
}
</style>