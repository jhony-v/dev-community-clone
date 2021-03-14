<template>
  <base-card border class="post">
    <div class="post__background">
      <img
        src="https://cdn.pixabay.com/photo/2021/02/08/20/24/lake-5996427__340.jpg"
      />
    </div>
    <div class="post__detail">
      <div class="post__user">
        <image-avatar
          src="https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323__340.jpg"
          size="30px"
        ></image-avatar>
        <div class="post__user__detail">
          <p class="post__detail__username">Leonardo Smith</p>
          <time class="post__detail__date">Mar 14 (17 hours ago)</time>
        </div>
      </div>
      <div class="post__content">
        <h3 class="post__content__title">
          RoadMap to learn MERN Stack for Beginners
        </h3>
        <div class="post__content__tags">
          <hashtag-link>javascript</hashtag-link>
          <hashtag-link>node</hashtag-link>
          <hashtag-link>react</hashtag-link>
        </div>
        <div class="post__content__options">
          <div class="post__actions">
            <base-card hover class="post__actions__item"
              >15 reactions</base-card
            >
            <base-card hover class="post__actions__item">6 comments</base-card>
          </div>
          <div>
            <span class="small-text">2 min read</span>
            <base-button variant="neutral">Save</base-button>
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
import { defineComponent } from "vue";

export default defineComponent({
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
