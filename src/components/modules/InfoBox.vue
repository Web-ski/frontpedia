<template>
  <div class="info-box">
    <PageTitle :title="number" />
    <InfoText :text="text" class="about-title" small />
  </div>
</template>

<script>
import PageTitle from "../elements/PageTitle";
import InfoText from "../elements/InfoText";

export default {
  name: "InfoBox",
  props: {
    number: String,
    text: String
  },
    components: {
    PageTitle,
    InfoText,
  },
};
</script>

<style scoped>
.info-box {
  text-align: center;
  padding: 20px;
  margin: 0;
  background-color: rgba(255,255,255,0.1);
  width: 150px;
  border-radius: 12px;
}

.info-box .page-title {
  margin: 0;
}

.info-box .about-title {
  margin: 0;
}
</style>