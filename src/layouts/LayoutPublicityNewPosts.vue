<template>
  <base-card border class="publicity">
    <img
      class="publicity__image"
      src="https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612__340.jpg"
    />
    <div class="publicity__detail">
      <div class="publicity__detail__list">
        <base-card variant="neutral" class="publicity__item">
          <base-text weight class="publicity__title"
            >{{ t("publicity.home.stories.title") }} (122)</base-text
          >
        </base-card>
        <base-card variant="neutral" hover class="publicity__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi
          itaque dolores.
        </base-card>
        <base-card variant="neutral" hover class="publicity__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi
          itaque dolores.
        </base-card>
        <base-card variant="neutral" hover class="publicity__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi
          itaque dolores.
        </base-card>
      </div>
      <div class="publicity__options">
        <base-button block size="medium">{{
          t("publicity.home.stories.share-story")
        }}</base-button>
        <base-button block size="medium" variant="neutral">{{
          t("publicity.home.stories.see-posts")
        }}</base-button>
      </div>
    </div>
  </base-card>
</template>
<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseText from "@/components/BaseText.vue";
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BaseCard, BaseButton, BaseText },
  setup() {
    const { t } = useI18n();
    return {
      t
    };
  }
});
</script>

<style lang="scss" scoped>
.publicity {
  border-radius: 5px;
  overflow: hidden;
  &__title {
    font-size: 1.1rem;
  }
  &__item {
    padding: 20px 10px;
    font-size: 0.9rem;
    line-height: 24px;
    border-bottom: 1px solid var(--border-color-10);
    border-radius: 0;
  }
  &__image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    border-radius: 0 0 5px 5px;
  }
  &__options {
    padding: 10px;
    * {
      margin-top: 10px;
    }
  }
}
</style>
