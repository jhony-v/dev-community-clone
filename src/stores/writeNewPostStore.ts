import { Tag } from "@/infraestructure/entities";
import storageObject from "@/utils/storageObject";
import { createStore } from "@harlem/core";
import marked from "marked";

export interface IWriteNewPostStore {
  title: string;
  backgroundImage: string;
  tags: Tag[];
  content: string;
}

const writeNewPostStoreInitialState: IWriteNewPostStore = {
  title: "",
  backgroundImage: "",
  tags: [],
  content: ""
};

export const writeNewPostStore = createStore(
  "writeNewPostStore",
  writeNewPostStoreInitialState
);

/* --------------------------------- getters -------------------------------- */

export const getContent = writeNewPostStore.getter("getContent", state =>
  marked(state.content)
);

export const isValidBackgroundImage = writeNewPostStore.getter(
  "isValidBackgroundImage",
  state =>
    state.backgroundImage.trim().length !== 0 &&
    /(jpg|png|jpeg|gif)/.test(state.backgroundImage)
);

/* --------------------------------- actions -------------------------------- */

export const onWrite = (() => {
  const onTitle = writeNewPostStore.mutation<string>(
    "onWritetitle",
    (state, payload) => {
      storageObject("new-post", { title: payload });
      state.title = payload;
    }
  );
  const onContent = writeNewPostStore.mutation<string>(
    "onWriteContent",
    (state, payload) => {
      storageObject("new-post", { content: payload });
      state.content = payload;
    }
  );
  const onBackgroundImage = writeNewPostStore.mutation<string>(
    "onBackgroundImage",
    (state, payload) => {
      storageObject("new-post", { backgroundImage: payload });
      state.backgroundImage = payload;
    }
  );

  return {
    onTitle,
    onContent,
    onBackgroundImage
  };
})();

/* --------------------------------- initialize storage --------------------------------- */

export const getInitialState = () => {
  const newPostStorage = localStorage.getItem("new-post");
  if (newPostStorage) {
    const parseNewPost = JSON.parse(newPostStorage);
    onWrite.onTitle(parseNewPost.title);
    onWrite.onContent(parseNewPost.content);
    onWrite.onBackgroundImage(parseNewPost.backgroundImage);
  }
};
