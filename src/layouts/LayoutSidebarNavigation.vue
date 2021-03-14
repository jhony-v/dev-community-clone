<template>
  <aside class="sidebar-layout">
    <div class="sidebar__navigation">
      <router-link
        v-for="(e, i) in [
          'Home',
          'Reading List',
          'Listing',
          'Podcasts',
          'Videos',
          'Tags'
        ]"
        to="/"
        :key="i"
        class="navigation__item"
        >{{ e }}</router-link
      >
    </div>
    <div class="sidebar__tags">
      <base-text weight>My tags</base-text>
      <div class="sidebar__tags__list">
        <hashtag-link
          dark
          class="tag__item"
          v-for="(e, i) in [
            'Java',
            'React',
            'Development',
            'Vue',
            'Npm',
            'Graphql',
            'webdev',
            'javascript',
            'css',
            'php'
          ]"
          :key="i"
          >{{ e }}</hashtag-link
        >
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import BaseText from "@/components/BaseText.vue";
import HashtagLink from "@/components/HashtagLink.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BaseText, HashtagLink }
});
</script>

<style lang="scss" scoped>
.sidebar {
  &__navigation {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    margin-bottom: 20px;
    .navigation__item {
      margin-bottom: 20px;
      color: var(--text-base-color);
      font-size: 0.9rem;
    }
  }
  &__tags {
    &__list {
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      height: 300px;
      overflow-y: auto;
      .tag__item {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
