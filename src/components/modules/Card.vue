<template>
  <article class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <img class="card-image" :src="url + image" />
    </div>
    <div class="card-body">
      <p class="card-text">
        {{ intro }}
      </p>
    </div>
    <div class="card-footer">
      <router-link class="card-link" :to="title">
        <ButtonMore />
      </router-link>
    </div>
  </article>
</template>

<script>
import ButtonMore from "../elements/ButtonMore";
export default {
  name: "Card",
  data() {
    return { url: "/images/" };
  },
  components: {
    ButtonMore,
  },
  props: {
    title: String,
    image: String,
    intro: String,
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  min-width: 250px;
  max-width: 300px;
  margin: 40px auto;
  border-radius: 12px;
  border: solid 4px white;
  background-color: white;
}

.card-header,
.card-body,
.card-footer {
  padding: 10px 20px;
  letter-spacing: 0.5px;
}

.card-body {
  padding: 20px 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: none;
  border-radius: 12px;
  background-color: #eee;
  margin: 5px;
}

.card-title {
  margin: 0;
  font-size: 20px;
  color: #222;
  font-size: 1.3rem;
}

.card-text {
  color: #111;
  margin: 0;
  line-height: 150%;
  font-size: 1.1rem;
}

.card-image {
  height: 40px;
}

.card-link {
  text-decoration: none;
  width: min-content;
  display: block;
  margin: 0 0 10px auto;
}

@media screen and (min-width: 670px) {
  .card-title {
    font-size: 1.5rem;
  }
  .card-text {
    font-size: 1.2rem;
  }

  .card {
    max-width: 400px;
  }
}
</style>