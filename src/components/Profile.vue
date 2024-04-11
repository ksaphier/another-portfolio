<template>
  <div class="container">
    <h1 class="text-gradient">{{ data.contactInformation.name }}</h1>
    <p>{{ data.professionalProfile }}</p>
  </div>
</template>
<script setup>
import data from "../assets/data.json";
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  font-size: 2.5em;
  margin-bottom: 0;
}
@media (min-width: 576px) {
  .container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
  }
  h1 {
    grid-row: 1;
    grid-column: 1 / span 1;
    text-align: left;
    width: 60%;
    font-size: 3em;
  }
  p {
    grid-row: 2;
    grid-column: 1 / span 1;
    text-align: right;
    width: 70%;
    margin-left: auto;
  }
}
@media (min-width: 1200px) {
  h1 {
    width: 70%;
    font-size: 4em;
  }
  p {
    width: 50%;
    font-size: 1.2em;
  }
}
</style>
