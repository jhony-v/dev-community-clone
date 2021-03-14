<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from "vue";

export default defineComponent({
  props: {
    initialId: String
  },
  emits: ["onTabSelected"],
  setup(props, context) {
    const currentTab = ref(props.initialId);

    watch(currentTab, currentTabValue => {
      context.emit("onTabSelected", currentTabValue);
    });

    const changeCurrentTab = (payload: string) => {
      currentTab.value = payload;
    };
    provide("CURRENT_TAB", currentTab);
    provide("CHANGE_TAB", changeCurrentTab);
  }
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
}
</style>
