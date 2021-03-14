<template>
  <router-link
    v-if="isLink"
    :to="to"
    :class="[
      'base-button',
      `base-button__${variant}`,
      `base-button__size-${size}`,
      block && 'block',
      weight && 'weight'
    ]"
  >
    <slot />
  </router-link>
  <button
    v-else
    :class="[
      'base-button',
      `base-button__${variant}`,
      `base-button__size-${size}`,
      block && 'block',
      weight && 'weight'
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isLink: Boolean,
    to: String,
    block: Boolean,
    weight: Boolean,
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "normal"
    }
  }
});
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 6px;
  padding: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &.block {
    width: 100%;
  }
  &.weight {
    font-weight: bold;
  }
  &__primary {
    background-color: var(--bg-button-color);
    color: var(--text-button-color);
  }
  &__ghost {
    border: 2px solid var(--text-primary-color);
    color: var(--text-primary-color);
    background: none;
  }
  &__neutral {
    background-color: var(--bg-button-color-neutral);
    color: var(--text-base-color-30);
  }
  &__text {
    color: var(--text-primary-color);
    background: none;
  }
  &__size {
    &-medium {
      padding: 10px;
    }
    &-large {
      padding: 14px;
    }
  }
}
</style>
