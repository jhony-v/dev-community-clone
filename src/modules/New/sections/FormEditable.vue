<template>
  <div class="write__insert-link--wrapper">
    <button class="write__insert-link--button">
      Add a cover image
    </button>
  </div>
  <input class="write__title" placeholder="New post title here..." />
  <input class="write__tags" placeholder="Add up to 4 tags..." />
  <textarea class="write__content" rows="20"></textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.write {
  &__insert-link {
    &--button {
      margin-bottom: 20px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 10px 20px;
      background: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
      font-weight: bold;
      color: var(--text-base-color-30);
      display: inline-block;
    }
  }
  &__title {
    display: block;
    color: var(--text-base-color);
    font-size: 2.5em;
    font-weight: 900;
    &::placeholder {
      color: var(--text-base-color-20);
    }
  }
  &__tags {
    display: block;
    width: 100%;
    word-spacing: 3px;
    margin: 10px 0;
  }
  &__content {
    resize: none;
    width: 100%;
    font-size: 14px;
    font-family: monospace;
    display: block;
    margin-top: 30px;
  }
}
</style>
