<template>
  <article class="card">
    <div class="card-header">
      <h3 class="card-title">Bootstrap</h3>
      <img class="card-image" :src="image" />
    </div>
    <div class="card-body">
      <p class="card-text">
        Popularna biblioteka zawierająca narzędzia do stylowania stron i
        aplikacji.
      </p>
    </div>
    <div class="card-footer">
      <router-link class="card-link" to="/about">więcej</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      image: "hej",
    };
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  min-width: 250px;
  margin: 40px auto;
  background-color: #fefefc;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.1);
}

.card-header,
.card-body,
.card-footer {
  padding: 20px;
}

.card-header {
  border-bottom: solid 1px darkgrey;
  display: inline-block;
}

.card-title {
  margin: 0;
  font-size: 20px;
  color: rgb(26, 59, 167);
}

.card-text {
  color: #333;
  margin: 0;
}
</style>