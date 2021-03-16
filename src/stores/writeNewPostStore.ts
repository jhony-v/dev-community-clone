import { Tag } from "@/infraestructure/entities";
import { createStore } from "@harlem/core";

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
