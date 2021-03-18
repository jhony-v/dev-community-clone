<template>
  <div class="new">
    <section action="form" class="form">
      <div class="form__header">
        <dev-to-logo class="form__logo"></dev-to-logo>
        <base-text weight>Write a new post</base-text>
        <div class="form__tabs">
          <tab-provider initialId="edit" @onTabSelected="onTabSelected">
            <tab-item id="edit">Edit</tab-item>
            <tab-item id="preview">preview</tab-item>
          </tab-provider>
        </div>
      </div>
      <div class="form__write">
        <base-card border class="new__area">
          <keep-alive>
            <form-editable v-if="tabSelected === 'edit'" />
            <preview-result v-else-if="tabSelected === 'preview'" />
          </keep-alive>
        </base-card>
        <div class="form__options">
          <base-button weight size="medium">Publish</base-button>
          <base-button weight size="medium" variant="neutral"
            >Save draft</base-button
          >
        </div>
      </div>
    </section>
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
import { defineComponent, ref } from "vue";
import FormEditable from "./sections/FormEditable.vue";
import PreviewResult from "./sections/PreviewResult.vue";
import { getInitialState } from "@/stores/writeNewPostStore";

export default defineComponent({
  components: {
    DevToLogo,
    BaseText,
    BaseCard,
    BaseButton,
    TabItem,
    TabProvider,
    FormEditable,
    PreviewResult
  },
  setup() {
    const tabSelected = ref("edit");

    const onTabSelected = (tabId: string) => {
      tabSelected.value = tabId;
    };
    getInitialState();
    return {
      tabSelected,
      onTabSelected
    };
  }
});
</script>

<style lang="scss" scoped>
.new {
  display: flex;
  width: 92%;
  margin: 10px auto;
}
.form {
  width: 72%;
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

.new__area {
  height: 520px;
  overflow-y: auto;
}
</style>
