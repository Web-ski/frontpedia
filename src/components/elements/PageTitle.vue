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
  font-size: 30px;
  font-weight: 700;
  display: inline-block;
  margin: 10px auto;
}

@media screen and (min-width: 670px) {
  .page-title {
    font-size: 40px;
  }
}
</style>