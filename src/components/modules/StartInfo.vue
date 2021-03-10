<template>
  <section class="start-info__container">
    <h3 class="start-info__text">{{ text1 + recordsNumber + text2 }}</h3>
  </section>
</template>

<script>
import store from "../../api/store";
import { endText, startText } from "../../const/startInfo";

export default {
  name: "StartInfo",
  data() {
    return { text1: startText, text2: endText };
  },
  computed: {
    recordsNumber: () => {
      return store.getters.getRecordsNumber;
    },
  },
};
</script>

<style>
.start-info__container {
  min-height: 200px;
}
.start-info__text {
  color: white;
  font-size: 1.5rem;
}

@media screen and (min-width: 670px) {
  .start-info__text {
    color: white;
    font-size: 1.8rem;
  }
}
</style>