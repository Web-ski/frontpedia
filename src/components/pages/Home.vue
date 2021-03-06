<template>
  <main id="home">
    <PageTitle title="frontped:a" />
    <Search />
    <section class="card-container">
      <template v-if="records">
        <Card />
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
import store from "../../api/store";

export default {
  name: "Home",
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