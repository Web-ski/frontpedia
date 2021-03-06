<template>
  <main id="home">
    <PageTitle :title="pageName" />
    <Search />
    <section class="card-container">
      <template v-if="records">
        <Card
          v-for="record in records"
          :key="record.title"
          :title="record.title"
          :image="record.image"
          :body="record.body"
          :link="record.link"
        />
      </template>
      <template v-else>
        <StartInfo />
      </template>
    </section>
  </main>
</template>

<script>
import PageTitle from "../elements/PageTitle";
import Search from "../modules/Search";
import Card from "../modules/Card";
import StartInfo from "../modules/StartInfo";
import { pageName } from "../../const/brand.js";
import store from "../../api/store";

export default {
  name: "Home",
  data() {
    return {
      pageName: pageName,
    };
  },
  components: {
    PageTitle,
    Search,
    Card,
    StartInfo,
  },
  computed: {
    records: () => {
      console.log(store.getters.getRecords);
      return store.getters.getRecords;
    },
  },
};
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
</style>