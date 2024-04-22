<template>
  <div class="contact-buttons">
    <div
      v-for="item in data.contactInformation.contact"
      :key="item.key"
      class="contact-button p-1"
    >
      <a v-if="item.url" :href="item.url" target="_blank">
        <IconComponent :icon="item.icon" size="32" class="pl-2" />
        <span>{{ item.value }}</span>
        <IconComponent icon="externallink" size="24" class="pr-2" />
      </a>
      <a v-else @click="copyToClipboard(item.value)">
        <IconComponent :icon="item.icon" size="32" class="pl-2" />
        <span>{{ item.value }}</span>
        <IconComponent icon="copypaste" size="24" class="pr-2" />
      </a>
    </div>
  </div>
</template>
<script setup>
import IconComponent from "./IconComponent.vue";
import data from "../assets/data.json";
const copyToClipboard = (value) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert(`${value} Copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  } else {
    console.log("Clipboard not available");
  }
};
</script>
<style scoped>
.contact-buttons {
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  flex-wrap: wrap;
}
.contact-button {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  border-radius: calc(var(--default-border-radius) - var(--space-1));
  background-color: var(--btn-background-color);
  margin: auto;
  width: auto;
  transition: background-color 0.3s;
  padding: 0;
}
a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  color: var(--btn-text-color);
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
}
a:hover {
  color: var(--primary-color);
}
a > span {
  text-align: center;
  width: 100%;
  margin: calc(var(--space-2) * 0.6);
  font-weight: 400;
}
@media (max-width: 576px) {
  .contact-buttons {
    flex-direction: column;
    justify-content: flex-start;
  }
  .contact-button {
    width: 90%;
  }
}
@media (min-width: 576px) {
  .contact-buttons {
    flex-direction: row;
    justify-content: center;
  }
  .contact-button {
    margin: 0;
  }
}
</style>
