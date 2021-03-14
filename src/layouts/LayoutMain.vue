<template>
  <div class="main-layout">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.main-layout {
  margin-top: var(--layout-header-height);
}
</style>
