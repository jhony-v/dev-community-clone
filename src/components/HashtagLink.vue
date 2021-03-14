<template>
  <router-link :to="to" class="hashtag__link" :class="[dark && 'dark']"
    ># <slot
  /></router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      default: "/"
    },
    dark: Boolean,
    text: String
  }
});
</script>
<style lang="scss" scoped>
.hashtag__link {
  font-size: 0.85rem;
  color: var(--text-base-color-10);
  &.dark {
    color: var(--text-base-color);
  }
  &:hover {
    color: var(--text-base-color-30);
  }
}
</style>
