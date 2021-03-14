<template>
  <button
    @click="changeCurrentTab(id)"
    :class="['tab', isSelected && 'selected']"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";

export default defineComponent({
  props: {
    id: String
  },
  setup(props) {
    const currentTab = inject<{ value: string }>("CURRENT_TAB", { value: "" });
    const changeCurrentTab = inject("CHANGE_TAB");
    const isSelected = computed(() => currentTab.value === props.id);

    return {
      changeCurrentTab,
      isSelected
    };
  }
});
</script>

<style lang="scss" scoped>
@mixin hover() {
  &:hover {
    background-color: var(--primary-color-alpha-10);
    color: var(--primary-color);
    border-radius: 3px;
  }
}

.tab {
  text-align: center;
  transition: 0.3s;
  color: var(--text-base-color-20);
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 0;
  padding: 8px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
  @include hover();
  &.selected {
    box-shadow: 0 -3px 0px var(--primary-color) inset;
    font-weight: bold;
    color: var(--text-base-color);
    @include hover();
  }
}
</style>
