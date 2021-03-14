<template>
  <img
    :src="src"
    :alt="alt"
    class="avatar"
    :style="`width:${size};height:${size}`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: String,
    alt: String,
    size: {
      type: String,
      default: "45px"
    }
  }
});
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
  object-fit: cover;
  display: block;
}
</style>
