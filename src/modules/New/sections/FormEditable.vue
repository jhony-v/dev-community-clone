<template>
  <div class="write">
    <div class="write__insert-link--wrapper">
      <template v-if="isValidBackgroundImage">
        <div class="image__preview">
          <img :src="writeNewPostStore.state.backgroundImage" />
          <div class="image__preview__options">
            <base-button
              variant="neutral"
              size="medium"
              class="change-image"
              @click="onChangeImage"
            >
              Change
            </base-button>
            <base-button
              size="medium"
              class="remove-image"
              @click="onRemoveImage"
              >Remove</base-button
            >
          </div>
        </div>
      </template>
      <template v-else>
        <div class="image__input__wrapper" v-if="toggleAddImageStatus">
          <input
            class="image__input__url"
            type="url"
            placeholder="Type a image url..."
            @keyup="onWrite.onBackgroundImage($event.target.value)"
          />
          <div
            class="image__input__button"
            role="button"
            tabindex="0"
            @click="hideInputToAddImage"
          >
            Cancel
          </div>
        </div>
        <button class="image__add-button" @click="showInputToAddImage" v-else>
          Add a cover image
        </button></template
      >
    </div>
    <input
      class="write__title"
      placeholder="New post title here..."
      :value="writeNewPostStore.state.title"
      @keyup="onWrite.onTitle($event.target.value)"
    />
    <input class="write__tags" placeholder="Add up to 4 tags..." />
    <textarea
      class="write__content"
      rows="6"
      placeholder="Write your post content here..."
      :value="writeNewPostStore.state.content"
      @keyup="onWrite.onContent($event.target.value)"
    ></textarea>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import {
  onWrite,
  writeNewPostStore,
  isValidBackgroundImage
} from "@/stores/writeNewPostStore";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { BaseButton },
  setup() {
    const toggleAddImageStatus = ref(false);
    const showInputToAddImage = () => (toggleAddImageStatus.value = true);
    const hideInputToAddImage = () => (toggleAddImageStatus.value = false);

    const onChangeImage = () => {
      onWrite.onBackgroundImage("");
      showInputToAddImage();
    };
    const onRemoveImage = () => {
      onWrite.onBackgroundImage("");
      hideInputToAddImage();
    };

    return {
      isValidBackgroundImage,
      onWrite,
      writeNewPostStore,
      toggleAddImageStatus,
      showInputToAddImage,
      hideInputToAddImage,
      onChangeImage,
      onRemoveImage
    };
  }
});
</script>

<style lang="scss" scoped>
.write {
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  .image {
    &__add-button,
    &__input__wrapper {
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
    &__input {
      &__wrapper {
        width: 100%;
        display: flex;
      }
      &__url {
        flex: 1;
      }
      &__button {
        outline: none;
        cursor: pointer;
      }
    }
    &__preview {
      display: flex;
      margin-bottom: 30px;
      img {
        width: 220px;
        height: 100px;
        border-radius: 5px;
      }
      &__options {
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
      & .change-image {
        font-weight: bold;
        border: 2px solid var(--text-base-color-10);
        background: none;
        margin-right: 20px;
      }
      & .remove-image {
        font-weight: bold;
        color: var(--text-danger-color);
        background: none;
      }
    }
  }

  &__title {
    display: block;
    color: var(--text-base-color);
    font-size: 2.6em;
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
    font-size: 18px;
    font-family: monospace;
    display: block;
    margin-top: 30px;
  }
}
</style>
