import { appStore } from "$data/appStore/appStore";
import { get } from "svelte/store";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import { returnReplacedElementInTheRightPosition } from "$components/CAD/CadView/CadProject/utilities/logic//replaceElementInTheRightPosition";

function saveChangesInProjectElements(
  projectName: string,
  newElements: TypeElementOrGroup,
) {
  returnReplacedElementInTheRightPosition(
    get(appStore).system.projects[projectName].elements,
    newElements,
  );

  appStore.set(get(appStore));
}

export { saveChangesInProjectElements };
