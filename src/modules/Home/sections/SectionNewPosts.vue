<template>
  <div class="posts">
    <div class="posts__header">
      <h1 class="posts__title">
        {{ t("posts.title") }}
      </h1>
      <div class="posts__nav">
        <tab-provider initialId="feeds">
          <tab-item v-for="(item, key) in getFilters" :key="key" :id="item.id"
            >{{ item.name }}
          </tab-item>
        </tab-provider>
      </div>
    </div>
    <div class="posts__list">
      <post-card
        v-for="(item, key) in getPosts"
        :key="key"
        :post="item"
      ></post-card>
    </div>
  </div>
</template>

<script lang="ts">
import { TabProvider, TabItem } from "@/components/Tabs";
import { defineComponent } from "vue";
import PostCard from "../components/PostCard.vue";
import { getPosts, getFilters } from "@/stores/postsStore";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: { TabProvider, TabItem, PostCard },
  setup() {
    const { t } = useI18n();

    return {
      getPosts,
      getFilters,
      t
    };
  }
});
</script>

<style lang="scss" scoped>
.posts {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  &__title {
    font-size: 1rem;
    margin: 0;
  }
  &__nav {
    margin-left: auto;
  }
}
</style>
