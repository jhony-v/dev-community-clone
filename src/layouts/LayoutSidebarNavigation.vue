<template>
  <aside class="sidebar-layout">
    <div class="sidebar__navigation">
      <router-link
        v-for="([text, image], i) in [
          [
            'Home',
            'https://www.flaticon.com/svg/vstatic/svg/3074/3074767.svg?token=exp=1615815613~hmac=343e89cec13c672a2c201aa459eac87c'
          ],
          [
            'Reading List',
            'https://www.flaticon.com/svg/vstatic/svg/167/167755.svg?token=exp=1615815392~hmac=b4906fdf542ed3341656d05bb94a5a1b'
          ],
          [
            'Listing',
            'https://www.flaticon.com/svg/vstatic/svg/3601/3601157.svg?token=exp=1615815682~hmac=25f58708fa70f09d509e09af9b111204'
          ],
          [
            'Podcasts',
            'https://www.flaticon.com/svg/vstatic/svg/4349/4349811.svg?token=exp=1615815592~hmac=e131b0061840d4142f50789af4cf246d'
          ],
          [
            'Videos',
            'https://www.flaticon.com/svg/vstatic/svg/3074/3074767.svg?token=exp=1615815613~hmac=343e89cec13c672a2c201aa459eac87c'
          ],
          [
            'Tags',
            'https://www.flaticon.com/svg/vstatic/svg/891/891586.svg?token=exp=1615815709~hmac=98f3170daa802c5270cf4fcb1e374282'
          ]
        ]"
        to="/"
        :key="i"
      >
        <base-card variant="inherit" hover class="navigation__item">
          <img :src="image" class="navigation__item__image" />{{ text }}
        </base-card>
      </router-link>
    </div>
    <div class="sidebar__tags">
      <base-text weight class="sidebar__tags__title">{{
        t("sidebar.my-tags")
      }}</base-text>
      <div class="sidebar__tags__list">
        <base-card
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
          variant="inherit"
          hover
          class="tag__item"
          :key="i"
        >
          <hashtag-link dark>
            {{ e }}
          </hashtag-link>
        </base-card>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import BaseText from "@/components/BaseText.vue";
import HashtagLink from "@/components/HashtagLink.vue";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: { BaseText, HashtagLink, BaseCard },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
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
      margin-bottom: 10px;
      color: var(--text-base-color);
      font-size: 0.9rem;
      display: flex;
      padding: 8px;
      align-items: center;
      &__image {
        margin-right: 10px;
        width: 20px;
      }
    }
  }
  &__tags {
    &__title {
      padding-left: 6px;
    }
    &__list {
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      height: 300px;
      overflow-y: auto;
      .tag__item {
        margin-bottom: 10px;
        padding: 8px;
      }
    }
  }
}
</style>
