import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import { get } from "svelte/store";

function handleMouseUp() {
  Object.keys(get(lastSelectedCadElementStore)).forEach((key) => {
    get(lastSelectedCadElementStore)[key] = null;
  });

  lastSelectedCadElementStore.set(get(lastSelectedCadElementStore));
}

export { handleMouseUp };