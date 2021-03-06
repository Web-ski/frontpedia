<template>
  <section class="start-info-container">
    <h3>{{ text1 + recordsNumber + text2 }}</h3>
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