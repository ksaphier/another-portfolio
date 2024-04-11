<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
const props = defineProps({
  icon: String,
});

const iconComponent = computed(() => {
  if (!props.icon) return null;
  return defineAsyncComponent(() =>
    import(`../assets/icons/${props.icon}.vue`)
  );
});
</script>
