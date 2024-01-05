import { writable } from "svelte/store";

export type TypeLastSelectedProjectStore = {
  projectName: string;
};

export const lastSelectedProjectStore = writable<TypeLastSelectedProjectStore>({
  projectName: null
});