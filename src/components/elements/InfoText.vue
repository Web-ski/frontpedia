<template>
  <h3 class="info__text">{{ text }}</h3>
</template>

<script>
export default {
  name: "InfoText",
  props: {
    text: String,
  },
};
</script>
<style>
.info__text {
  color: white;
  font-size: 1.5rem;
}

@media screen and (min-width: 670px) {
  .info__text {
    color: white;
    font-size: 1.8rem;
  }
}
</style>

