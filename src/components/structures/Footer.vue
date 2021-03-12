<template>
  <footer id="footer">
    <Paragraph :text="footer" />
  </footer>
</template>

<script>
import Paragraph from "../elements/Paragraph";

export default {
  name: "Footer",
  props: {
    footer: String
  },
  components: {
    Paragraph
  }
};
</script>

<style>
#footer {
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer .paragraph {
  color: #dddddd;
}
</style>