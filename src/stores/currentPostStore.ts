import { Post } from "@/infraestructure/entities";
import { createStore } from "@harlem/core";

const currentPostInitialState: Partial<Post> = {};

const currentPostStore = createStore("currentPostStore", {
  post: currentPostInitialState
});

export const onPrevisualizePost = currentPostStore.mutation<Partial<Post>>(
  "onPrevisualizePost",
  (state, payload) => {
    if (typeof payload !== "undefined") {
      state.post = payload;
    }
  }
);
