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
  <path d="M14 2v11h2.51l-4.51 5.01-4.51-5.01h2.51v-11h4zm2-2h-8v11h-5l9 10 9-10h-5v-11zm3 19v3h-14v-3h-2v5h18v-5h-2z"/>
  </svg>
</template>

<script>
export default {
  name: "download",
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
