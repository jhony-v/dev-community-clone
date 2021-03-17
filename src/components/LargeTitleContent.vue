<template>
  <h1 class="large__title">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.large__title {
  display: block;
  color: var(--text-base-color);
  font-size: 2.5em;
  font-weight: 900;
}
</style>
