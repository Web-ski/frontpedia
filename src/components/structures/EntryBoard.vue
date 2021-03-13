<template>
  <div class="entry-board">
    <h1 class="entry-title">{{ record.title }}</h1>
    <section class="entry-main">
      <article class="entry-body">
        <Paragraph
          v-for="paragraph in record.body"
          :key="paragraph"
          :text="paragraph"
        />
        <h4 class="entry-sources__title">Źródła:</h4>
        <ul class="entry-sources">
          <EntrySource
            v-for="source in record.sources"
            :key="source.link"
            :source="source"
          />
        </ul>
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
    <div class="entry-links">
      <EntryLink v-for="tag in record.tags" :key="tag" :link="tag">
        {{ tag }}
      </EntryLink>
    </div>
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
  max-width: 1200px;
  margin: 40px auto;
  color: black;
}

@keyframes cardShow {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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
  background-color: white;
  border-radius: 12px;
  color: black;
  animation: cardShow 0.5s;
}

.entry-aside {
  align-items: center;
  margin: 0 0 20px 0;
}

.entry-title {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 10px;
  color: white;
}

.entry-sources {
  padding-left: 20px;
  margin: 0;
  margin-bottom: 20px;
}

.entry-sources__title {
  font-size: 1rem;
  margin: 10px 0 0;
}

.entry-aside__image {
  width: 50px;
  height: 50px;
  margin: 10px;
}

.entry-links {
  margin: 15px 0;
}

@media screen and (min-width: 670px) {
  .entry-main {
    display: flex;
    flex-direction: row;
  }

  .entry-body {
    padding: 30px 40px;
  }

  .entry-aside {
    margin: 0 0 0 20px;
    text-align: center;
  }

  .entry-aside__image {
    width: 80px;
    height: 80px;
  }

  .entry-title {
    font-size: 2.5rem;
  }
}
</style>