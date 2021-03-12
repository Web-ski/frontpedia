<template>
  <MainTemplate>
    <section class="about-info__container">
      <InfoText :text="title" class="about-title" />
      <p class="about-text">{{ mainText }}</p>
      <article class="about-info__article">
        <InfoBox :number="recordsNumber.toString()" :text="text1" />
      </article>
    </section>
  </MainTemplate>
</template>

<script>
import store from "../../api/store";
import MainTemplate from "../templates/MainTemplate";
import InfoText from "../elements/InfoText";
import InfoBox from "../modules/InfoBox";
import {
  aboutHeading,
  aboutText,
  infoText1,
  aboutAuthor
} from "../../const/about";

export default {
  name: "About",
  data() {
    return {
      title: aboutHeading,
      mainText: aboutText,
      text1: infoText1,
      text3: aboutAuthor
    };
  },
  components: {
    MainTemplate,
    InfoText,
    InfoBox
  },
  computed: {
    recordsNumber: () => {
      return store.getters.getRecordsNumber;
    }
  }
};
</script>

<style>
.about-info__container {
  min-height: 200px;
}

.about-text {
  color: #eeeeee;
  font-size: 1.3rem;
}
.about-text--small {
  color: #eeeeee;
}

.about-info__article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

@media screen and (min-width: 670px) {
  .about-info__container {
    max-width: 920px;
    padding: 40px;
  }

  .about-info__article {
    flex-direction: row;
  }

  .about-text {
    font-size: 1.5rem;
  }
}
</style>