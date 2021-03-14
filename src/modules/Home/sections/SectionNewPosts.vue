<template>
  <div class="posts">
    <div class="posts__header">
      <h1 class="posts__title">
        Posts
      </h1>
      <div class="posts__nav">
        <tab-provider initialId="feed">
          <tab-item id="feed">Feed</tab-item>
          <tab-item id="week">Week</tab-item>
          <tab-item id="month">Month</tab-item>
          <tab-item id="year">Year</tab-item>
          <tab-item id="infinity">Infinity</tab-item>
          <tab-item id="latest">Latest</tab-item>
        </tab-provider>
      </div>
    </div>
    <div class="posts__list">
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
    </div>
  </div>
</template>

<script lang="ts">
import { TabProvider, TabItem } from "@/components/Tabs";
import { defineComponent } from "vue";
import PostCard from "../components/PostCard.vue";

export default defineComponent({
  components: { TabProvider, TabItem, PostCard }
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
