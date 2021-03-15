import { filterPostsData, postsData } from "@/infraestructure/data";
import { FilterPost, Post } from "@/infraestructure/entities";
import { createStore } from "@harlem/core";

export interface IPostsStore {
  posts: Partial<Post>[];
  filters: FilterPost[];
  currentFilter: FilterPost;
}

export const postsInitialState: IPostsStore = {
  posts: postsData,
  filters: filterPostsData,
  currentFilter: {
    id: "feeds",
    name: "Feeds"
  }
};

const postsStore = createStore("postsStore", postsInitialState);

/* -------------------------------- getterns -------------------------------- */

export const getPosts = postsStore.getter("getPosts", state => state.posts);
export const getFilters = postsStore.getter(
  "getFilters",
  state => state.filters
);

/* --------------------------------- actions -------------------------------- */

export const onFilterPosts = postsStore.mutation("onFilterPosts", state => {
  new Promise(f => setTimeout(f, 2000)).then(() => {
    state.posts = state.posts.filter(e => e.id === state.currentFilter.name);
  });
});

export const addPost = postsStore.mutation<Partial<Post>>(
  "addPost",
  (state, payload) => {
    state.posts.push(payload);
  }
);

export const onToggleSavePost = postsStore.mutation<string>(
  "onToggleSavePost",
  (state, postId) => {
    state.posts = state.posts.map(currentPost => ({
      ...currentPost,
      saved: postId === currentPost.id ? !currentPost.saved : currentPost.saved
    }));
  }
);
