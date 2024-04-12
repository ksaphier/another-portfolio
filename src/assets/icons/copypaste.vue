<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :fill="color"
    :stroke-width="strokeWidth"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
  <path d="M17 7h6v16h-16v-6h-6v-16h16v6zm5 1h-14v14h14v-14zm-6-1v-5h-14v14h5v-9h9z"/>  </svg>
</template>

<script>
export default {
  name: "copypaste",
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: "currentColor",
    },
    strokeWidth: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>
