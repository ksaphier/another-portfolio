<script setup>
import { ref, provide, computed } from "vue";
import IconComponent from "./IconComponent.vue";

const theme = ref("dark");

provide("theme", theme);

const hoverColor = computed(() => {
  return theme.value === "light" ? "#77d6ff" : "#ffd000";
});

const hoverEffect = ref(false);

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.body.className = theme.value + "-theme";
};
</script>

<template>
  <button
    @click="toggleTheme"
    class="menubarButton"
    @mouseenter="hoverEffect = true"
    @mouseleave="hoverEffect = false"
    :style="
      hoverEffect
        ? `box-shadow: 0 0 15px ${hoverColor}; color: ${hoverColor};`
        : ''
    "
  >
    <transition name="rotate-icon">
      <IconComponent :icon="theme === 'light' ? 'moon' : 'sun'" size="32" />
    </transition>
  </button>
</template>
<style scoped>
.rotate-icon-enter-active,
.rotate-icon-leave-active {
  transition: transform 0.5s ease;
}
.rotate-icon-enter-from,
.rotate-icon-leave-to {
  transform: rotate(-180deg);
}
.rotate-icon-enter-to,
.rotate-icon-leave-from {
  transform: rotate(0deg);
}
</style>
