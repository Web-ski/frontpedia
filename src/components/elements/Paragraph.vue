<template>
  <p class="paragraph">{{ text }}</p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    text: String || Object,
  },
};
</script>

<style>
.paragraph {
  font-size: 1.1rem;
  line-height: 150%;
}

@media screen and (min-width: 670px) {
  .paragraph {
    font-size: 1.2rem;
  }
}
</style>