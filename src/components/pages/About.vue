<template>
  <MainTemplate>
    <InfoText :text="title" />
    <section class="about-info__container">
      <h4>{{ text1 }}</h4>
      <h4>{{ text2 + recordsNumber + " haseł." }}</h4>
      <h4>{{ text3 }}</h4>
    </section>
  </MainTemplate>
</template>

<script>
import store from "../../api/store";
import MainTemplate from "../templates/MainTemplate";
import InfoText from "../elements/InfoText";
import {
  aboutHeading,
  aboutText,
  infoText,
  aboutAuthor,
} from "../../const/about";

export default {
  name: "About",
  data() {
    return {
      title: aboutHeading,
      text1: aboutText,
      text2: infoText,
      text3: aboutAuthor,
    };
  },
  components: {
    MainTemplate,
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
.about-info__container {
  min-height: 200px;
  max-width: 1000px;
}
</style>