import { get } from "svelte/store";
import { lastSelectedProjectStore } from "$data/lastSelected/cadProject/lastSelectedCadProjectStore";

function handleOnClick(thisProjectName: string) {
  get(lastSelectedProjectStore).projectName = thisProjectName;
  lastSelectedProjectStore.set(get(lastSelectedProjectStore));
}

export { handleOnClick };
