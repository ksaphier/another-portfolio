<template>
  <div class="menubar">
    <ThemeToggleButton />
    <a href="#profile" class="menubarButton menubarButtonHover">
      <IconComponent icon="arrowup" size="39" />
    </a>
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1ofZzom-RcxZLG3tzYpUz-j-PWuxAVCLi/view?usp=sharing"
      class="menubarButton menubarButtonHover"
    >
      <IconComponent icon="pdf" size="26" class="circle-icon" />
    </a>
  </div>
</template>

<script setup>
import ThemeToggleButton from "./ThemeToggleButton.vue";
import IconComponent from "./IconComponent.vue";
</script>

<style scoped>
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: fit-content;
  background-color: var(--btn-background-color);
  z-index: 1000;
  padding: calc(var(--space-1) * 1.5);
  padding-top: var(--space-1);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 var(--default-border-radius) var(--default-border-radius); /* This creates the circle shape */
  gap: var(--space-2);
}

.menubarButton {
  display: inline-flex; /* Use flexbox to center content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  border: none;
  width: 42px; /* Set a fixed width */
  height: 42px; /* Set a fixed height to match the width, forming a circle */
  border-radius: 50%; /* This creates the circle shape */
  color: var(--btn-text-color);
  background-color: transparent; /* Transparent background */
  cursor: pointer; /* Change mouse cursor to pointer to indicate it's clickable */
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s; /* Smooth background color transition */
}

.menubarButtonHover:hover {
  color: var(--primary-color);
}

a {
  text-decoration: none;
}

.circle-icon {
  border: solid 2px; /* Add a border */
  border-radius: 50%; /* This creates the circle shape */
  padding: 2px; /* Add some padding */
  font-size: small;
  font-weight: bold;
}
</style>
