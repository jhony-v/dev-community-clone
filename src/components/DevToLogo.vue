<template>
  <router-link to="/">
    <div class="logo">DEV</div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.logo {
  background-color: black;
  color: white;
  border-radius: epx;
  padding: 8px;
  font-weight: bold;
  font-size: 17px;
}
</style>
