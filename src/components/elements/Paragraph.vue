<template>
  <p :class="small ? 'paragraph--small' : 'paragraph'">{{ text }}</p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    text: String || Object,
    small: Boolean,
  },
};
</script>

<style>
.paragraph {
  font-size: 1.1rem;
  line-height: 150%;
}

.paragraph--small {
  font-size: 1rem;
  line-height: 140%;
}

@media screen and (min-width: 670px) {
  .paragraph {
    font-size: 1.2rem;
  }

  .paragraph--small {
    font-size: 1.1rem;
    line-height: 140%;
  }
}
</style>