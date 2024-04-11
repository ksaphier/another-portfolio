<template>
  <h1 class="my-3 text-gradient">Experiencia Profesional</h1>
  <div class="card-container">
    <div
      class="card"
      v-for="item in data.professionalExperience"
      :key="item.key"
    >
      <div class="card-header">
        <h2 class="mb-1">{{ item.company }}</h2>
      </div>
      <div class="card-body">
        <h3 class="mt-1">{{ item.position }}</h3>
        <p>{{ item.projects }}</p>
        <p class="periodo">
          {{
            item.duration ? `${item.duration} - ${item.period}` : item.period
          }}
        </p>
      </div>
      <div class="card-footer pb-3">
        <h3 class="mt-2">Tecnologías</h3>
        <div style="display: flex; gap: 1em; flex-wrap: wrap">
          <div
            v-for="tech in item.techStack"
            :key="tech.key"
            :style="`border: 0.15em solid rgb(${tech.color})`"
            class="techs"
          >
            {{ tech.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import data from "../assets/data.json";
</script>
<style scoped>
.card-container {
  display: grid;
  grid-template-columns: auto;
  gap: var(--space-3);
}
h1 {
  text-align: center;
}
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--text-color);
  border-radius: var(--default-border-radius);
  background-color: var(--secondary-background);
  box-shadow: inset 0 0 0 40px
    linear-gradient(
      to right,
      var(--secondary-color),
      var(--complementary-color)
    );
  overflow: hidden; /* Ensure the box-shadow respects the border-radius */
}
.card > * {
  padding-left: var(--space-3);
  padding-right: var(--space-3);
}
.card-footer {
  border: 1px solid var(--text-color);
  border-radius: calc(var(--default-border-radius) - var(--space-1));
  margin: var(--space-1);
  margin-top: auto;
  background-color: var(--background-color);
}
.periodo {
  text-align: right;
  color: var(--secondary-text);
}
.techs {
  border-radius: calc(var(--default-border-radius) * 1.5);
  padding: calc(var(--space-1) / 2);
  padding-left: calc(var(--space-2));
  padding-right: calc(var(--space-2));
}
@media (min-width: 576px) {
  .card-container {
    margin-left: var(--space-3);
    margin-right: var(--space-3);
  }
}
@media (min-width: 900px) {
  .card-container {
    grid-template-columns: auto auto;
    gap: var(--space-3);
  }
}
@media (min-width: 1800px) {
  .card-container {
    grid-template-columns: auto auto auto;
    gap: var(--space-4);
  }
}
</style>
