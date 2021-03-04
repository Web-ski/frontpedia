<template>
  <main id="home">
    <PageTitle title="frontped:a" />
    <Search />
    <Card />
  </main>
</template>

<script>
import PageTitle from "../elements/PageTitle";
import Search from "../modules/Search";
import Card from "../modules/Card";

export default {
  name: "Home",
  components: {
    PageTitle,
    Search,
    Card,
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