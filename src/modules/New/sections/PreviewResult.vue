<template>
  <img
    :src="writeNewPostStore.state.backgroundImage"
    v-if="isValidBackgroundImage"
    class="preview__background-image"
  />
  <div class="preview__detail">
    <large-title-content>{{
      writeNewPostStore.state.title
    }}</large-title-content>
    <div class="preview__content" v-html="getContent" />
  </div>
</template>

<script lang="ts">
import LargeTitleContent from "@/components/LargeTitleContent.vue";
import {
  writeNewPostStore,
  getContent,
  isValidBackgroundImage
} from "@/stores/writeNewPostStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LargeTitleContent
  },
  setup() {
    return {
      writeNewPostStore,
      getContent,
      isValidBackgroundImage
    };
  }
});
</script>

<style lang="scss" scoped>
.preview {
  &__background-image {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
  &__detail {
    padding: 0 50px;
  }
  &__content {
    font-family: monospace !important;
  }
}
</style>
