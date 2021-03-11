<template>
  <MainTemplate>
    <PageTitle :title="pageName" />
    <Search />
    <section class="card-container">
      <template v-if="records">
        <Card
          v-for="record in records"
          :key="record.title"
          :title="record.title"
          :image="record.image"
          :intro="record.intro"
          :link="record.link"
        />
      </template>
      <template v-else>
        <StartInfo />
      </template>
    </section>
  </MainTemplate>
</template>

<script>
import MainTemplate from "../templates/MainTemplate";
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
    MainTemplate,
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
@media screen and (min-width: 670px) {
  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>