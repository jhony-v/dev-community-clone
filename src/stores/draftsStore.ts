import { createStore } from "@harlem/core";
import { IPostsStore } from "./postsStore";

export interface IDraftsState {
  drafts: IPostsStore[];
}

const draftsInitialState: IDraftsState = {
  drafts: []
};

const draftsStore = createStore("draftsStore", draftsInitialState);

/* --------------------------------- getters -------------------------------- */

export const getAllDrafts = draftsStore.getter(
  "getAllDrafts",
  state => state.drafts
);

/* --------------------------------- actions -------------------------------- */

export const addNewDraft = draftsStore.mutation<IPostsStore>(
  "addNewDraft",
  (state, payload) => {
    state.drafts.push(payload);
  }
);
