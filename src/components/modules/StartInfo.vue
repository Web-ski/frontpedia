<template>
  <section class="start-info__container">
    <InfoText :text="text1 + recordsNumber + text2" />
  </section>
</template>

<script>
import store from "../../api/store";
import InfoText from "../elements/InfoText";
import { endText, startText } from "../../const/startInfo";

export default {
  name: "StartInfo",
  data() {
    return { text1: startText, text2: endText };
  },
  components: {
    InfoText,
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>