import { derived } from "svelte/store";
import {
  lastSelectedLineStore
} from "$data/selected/line/lastSelectedLineStore";

export const selectedStore = derived(
  [lastSelectedLineStore],
  ([$lastSelectedLineStore]) => {
    return {
      line: $lastSelectedLineStore,
    };
  },
);
