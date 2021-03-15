<template>
  <header class="header">
    <div class="header__logo">
      <dev-to-logo></dev-to-logo>
    </div>
    <div class="header__engine">
      <input class="header__engine__input" placeholder="Search..." />
    </div>
    <div class="header__user-options">
      <base-button weight size="medium" @click="$router.push('/new')">
        Write a post
      </base-button>
      <image-avatar
        src="https://cdn.pixabay.com/photo/2021/02/08/20/24/lake-5996427__340.jpg"
      ></image-avatar>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import DevToLogo from "@/components/DevToLogo.vue";
import ImageAvatar from "@/components/ImageAvatar.vue";

export default defineComponent({
  components: { DevToLogo, BaseButton, ImageAvatar }
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: var(--layout-header-height);
  background-color: var(--bg-card-color);
  padding: 10px 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  &__engine {
    margin: 0 20px;
    &__input {
      background-color: var(--bg-card-color-10);
      border: 1px solid var(--border-color);
      padding: 12px;
      border-radius: 5px;
      width: 400px;
    }
  }
  &__user-options {
    margin-left: auto;
    display: flex;
    align-items: center;
    * {
      margin-left: 10px;
    }
  }
}
</style>
