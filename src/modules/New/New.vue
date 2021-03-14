<template>
  <div class="new">
    <form action="form" class="form">
      <div class="form__header">
        <dev-to-logo class="form__logo"></dev-to-logo>
        <base-text weight>Write a new post</base-text>
        <div class="form__tabs">
          <tab-provider initialId="edit">
            <tab-item id="edit">Edit</tab-item>
            <tab-item id="preview">preview</tab-item>
          </tab-provider>
        </div>
      </div>
      <div class="form__write">
        <base-card border class="write__area">
          <div class="write__insert-link--wrapper">
            <button class="write__insert-link--button">
              Add a cover image
            </button>
          </div>
          <input class="write__title" placeholder="New post title..." />
          <input class="write__tags" placeholder="Add up to 4 tags..." />
          <textarea class="write__content" rows="20"></textarea>
        </base-card>
        <div class="form__options">
          <base-button weight size="medium">Publish</base-button>
          <base-button weight size="medium" variant="neutral"
            >Save draft</base-button
          >
        </div>
      </div>
    </form>
    <div class="message">
      <base-text weight>Editor Basics</base-text>
      <div class="message__detail">
        Use Markdown to write and format posts. Commonly used syntax You can use
        Liquid tags to add rich content such as Tweets, YouTube videos, etc. In
        addition to images for the post's content, you can also drag and drop a
        cover image
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseText from "@/components/BaseText.vue";
import DevToLogo from "@/components/DevToLogo.vue";
import { TabItem, TabProvider } from "@/components/Tabs";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    DevToLogo,
    BaseText,
    BaseCard,
    BaseButton,
    TabItem,
    TabProvider
  }
});
</script>

<style lang="scss" scoped>
.new {
  display: flex;
  width: 80%;
  margin: 10px auto;
}
.form {
  width: 70%;
  flex: none;
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__logo {
    margin-right: 10px;
  }
  &__options {
    margin: 20px 0;
    * {
      margin-right: 10px;
    }
  }
  &__tabs {
    margin-left: auto;
  }
  &__write {
    width: 90%;
    margin-left: auto;
  }
}

.message {
  margin-top: auto;
  margin-bottom: 10%;
  padding: 20px;
  &__detail {
    color: var(--text-base-color-20);
    font-size: 14px;
    margin-top: 8px;
    line-height: 23px;
  }
}

.write {
  &__area {
    height: 520px;
    overflow-y: auto;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
  }
  &__insert-link {
    &--wrapper {
    }
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
    font-size: 2.4em;
    font-weight: bold;
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
