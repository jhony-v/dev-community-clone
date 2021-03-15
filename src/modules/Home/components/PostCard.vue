<template>
  <base-card border class="post">
    <div class="post__background" v-if="post.backgroundImage">
      <img :src="post.backgroundImage" />
    </div>
    <div class="post__detail">
      <div class="post__user">
        <image-avatar :src="post.user?.avatar" size="30px"></image-avatar>
        <div class="post__user__detail">
          <p class="post__detail__username">{{ post.user?.fullName }}</p>
          <time class="post__detail__date">{{ post.datePublished }}</time>
        </div>
      </div>
      <div class="post__content">
        <h3 class="post__content__title">
          {{ post.title }}
        </h3>
        <div class="post__content__tags">
          <hashtag-link
            v-for="(item, key) in post.tags || []"
            :key="key"
            :to="item.id"
          >
            {{ item.name }}
          </hashtag-link>
        </div>
        <div class="post__content__options">
          <div class="post__actions">
            <base-card hover class="post__actions__item"
              >{{ post.reactions?.totalHearts }} reactions</base-card
            >
            <base-card hover class="post__actions__item"
              >{{ post.reactions?.totalComments }} comments</base-card
            >
          </div>
          <div>
            <span class="small-text">2 min read</span>
            <base-button variant="neutral" @click="$emit('onSave', post.id)">{{
              post.saved ? "Saved" : "Save"
            }}</base-button>
          </div>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import HashtagLink from "@/components/HashtagLink.vue";
import ImageAvatar from "@/components/ImageAvatar.vue";
import { defineComponent, PropType } from "vue";
import { Post } from "@/infraestructure/entities";

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Partial<Post>>,
      default: {}
    }
  },
  emits: ["onSave"],
  components: { BaseCard, ImageAvatar, HashtagLink, BaseButton }
});
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--bg-card-color);
  margin-bottom: 20px;
  &__actions {
    display: flex;
    align-items: center;
    &__item {
      margin-right: 6px;
      border-radius: 5px;
      padding: 6px 2px;
      cursor: pointer;
      font-size: 0.8rem;
    }
  }
  &__background {
    display: flex;
    height: 200px;
    width: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &__detail {
    padding: 18px 12px;
    &__username {
      font-size: 0.9rem;
      color: var(--text-base-color-30);
      font-weight: bold;
    }
    &__date {
      font-size: 0.7rem;
      color: var(--text-base-color-10);
    }
  }
  &__user {
    display: flex;
    &__detail {
      margin-left: 10px;
      * {
        padding: 0;
        margin: 0;
      }
    }
  }
  &__content {
    margin-left: 40px;
    &__title {
      font-size: 1.6em;
      margin: 10px 0;
      &:hover {
        color: var(--text-primary);
        cursor: pointer;
      }
    }
    &__tags {
      * {
        margin-right: 15px;
      }
    }
    &__options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      .small-text {
        font-size: 0.7em;
        color: var(--text-base-color-10);
        margin-right: 5px;
      }
    }
  }
}
</style>
