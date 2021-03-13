<template>
  <p :class="small ? 'paragraph--small' : 'paragraph'">
    <template v-if="typeof text === 'object'">
      <template v-for="item in text">
        <strong v-if="item.strong" :key="item.strong">{{ item.strong }}</strong>
        <template v-if="item.text">{{ item.text }}</template>
      </template>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    text: [String, Array, Object],
    small: Boolean,
  },
  methods: {
    hej: function (item) {
      console.log(item);
    },
  },
};
</script>

<style>
.paragraph {
  color: #333;
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
    font-size: 1rem;
    line-height: 140%;
  }
}
</style>