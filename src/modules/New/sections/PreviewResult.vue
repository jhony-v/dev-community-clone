<template>
  <large-title-content>{{ writeNewPostStore.state.title }}</large-title-content>
  <div class="preview__content" v-html="getContent" />
</template>

<script lang="ts">
import LargeTitleContent from "@/components/LargeTitleContent.vue";
import { writeNewPostStore, getContent } from "@/stores/writeNewPostStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LargeTitleContent
  },
  setup() {
    return {
      writeNewPostStore,
      getContent
    };
  }
});
</script>

<style lang="scss" scoped>
.preview {
  &__content {
    font-family: monospace !important;
  }
}
</style>
