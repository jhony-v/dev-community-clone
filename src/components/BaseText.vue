<template>
  <span :class="['text', weight && 'weight']">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    weight: Boolean
  }
});
</script>

<style lang="scss" scoped>
.text {
  &.weight {
    font-weight: bold;
  }
}
</style>
