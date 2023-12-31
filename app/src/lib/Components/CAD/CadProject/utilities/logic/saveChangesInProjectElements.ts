import { appStore } from "$data/appStore";
import { get } from "svelte/store";
import { returnReplacedElementInTheRightPosition } from "$logic/replaceElementInTheRightPosition";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

function saveChangesInProjectElements(
  projectName: string,
  newElements: TypeElementOrGroup,
) {
  get(appStore).system.projects[projectName].elements =
    returnReplacedElementInTheRightPosition(
      get(appStore).system.projects[projectName].elements,
      newElements,
    );

  appStore.set(get(appStore));
}

export { saveChangesInProjectElements };
