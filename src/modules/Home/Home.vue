<template>
  <layout-header-navigator></layout-header-navigator>
  <layout-main class="root">
    <main class="main">
      <div class="main__navigator">
        <layout-sidebar-navigation></layout-sidebar-navigation>
      </div>
      <div class="main__news">
        <section-new-posts></section-new-posts>
      </div>
      <div class="main__publicity">
        <layout-publicity-new-posts></layout-publicity-new-posts>
      </div>
    </main>
  </layout-main>
</template>

<script lang="ts">
import LayoutHeaderNavigator from "@/layouts/LayoutHeaderNavigator.vue";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutPublicityNewPosts from "@/layouts/LayoutPublicityNewPosts.vue";
import LayoutSidebarNavigation from "@/layouts/LayoutSidebarNavigation.vue";
import { defineComponent } from "vue";
import SectionNewPosts from "./sections/SectionNewPosts.vue";

export default defineComponent({
  components: {
    LayoutHeaderNavigator,
    LayoutMain,
    SectionNewPosts,
    LayoutSidebarNavigation,
    LayoutPublicityNewPosts
  }
});
</script>
<style lang="scss" scoped>
.root {
  padding: 20px;
}
.main {
  display: grid;
  grid-template-columns: 230px 1fr 290px;
  gap: 20px;
  width: 85%;
  margin: auto;
}
</style>
