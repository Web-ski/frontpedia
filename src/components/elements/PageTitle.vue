<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: String,
  },
};
</script>

<style>
.page-title {
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  display: inline-block;
  margin: 10px auto;
}

@media screen and (min-width: 670px) {
  .page-title {
    font-size: 3rem;
  }
}
</style>