<template>
  <main id="home">
    <PageTitle title="{frontpedia}" />
  </main>
</template>

<script>
import PageTitle from "../elements/PageTitle";
export default {
  name: "Home",
  components: {
    PageTitle,
  },
};
</script>

<style>
#home {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>