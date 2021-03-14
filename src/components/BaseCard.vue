<template>
  <div
    :class="[
      'card',
      variant && `card__${variant}`,
      border && 'card__border',
      hover && 'card__hover'
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    variant: String,
    border: Boolean,
    hover: Boolean
  }
});
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--bg-card-color);
  border-radius: 5px;
  transition: background-color 0.3s;
  &__hover {
    &:hover {
      background-color: var(--bg-card-color-10);
    }
  }
  &__neutral {
    background-color: var(--bg-card-color-10);
    &.card__hover {
      &:hover {
        background-color: var(--bg-card-color);
      }
    }
  }
  &__border {
    border: 1px solid var(--border-color);
  }
}
</style>
