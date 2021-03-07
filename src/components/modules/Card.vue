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
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.card-header,
.card-body,
.card-footer {
  padding: 10px 20px;
  letter-spacing: 0.5px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 12px 12px 0 0;
  border: 2px solid rgba(245, 106, 106, 0.18);
  border-bottom: none;
}

.card-title {
  margin: 0;
  font-size: 20px;
  color: rgb(26, 59, 167);
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
  .card-text {
    font-size: 1.2rem;
  }

  .card {
    max-width: 400px;
  }
}
</style>