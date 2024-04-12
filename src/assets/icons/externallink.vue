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
  <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>  </svg>
</template>

<script>
export default {
  name: "externallink",
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
