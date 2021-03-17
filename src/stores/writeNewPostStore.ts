import { Tag } from "@/infraestructure/entities";
import storageObject from "@/utils/storageObject";
import { createStore, EVENTS } from "@harlem/core";
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

export const getContent = writeNewPostStore.getter("getContent", state => {
  return marked(state.content);
});

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
  return {
    onTitle,
    onContent
  };
})();

/* --------------------------------- initialize storage --------------------------------- */

export const getInitialState = () => {
  const newPostStorage = localStorage.getItem("new-post");
  if (newPostStorage) {
    const parseNewPost = JSON.parse(newPostStorage);
    onWrite.onTitle(parseNewPost.title);
    onWrite.onContent(parseNewPost.content);
  }
};
