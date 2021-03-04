<template>
  <div class="card">
    <h3 class="card-title">Bootstrap</h3>
    <p class="card-text">
      Popularna biblioteka zawierająca narzędzia do stylowania stron i
      aplikacji.
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  min-height: 100px;
  min-width: 250px;
  padding: 20px;
  margin: 40px auto;
  background-color: #fdfcf6;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.card-title {
  margin: 10px 0;
}

.card-text {
  color: #333;
}
</style>