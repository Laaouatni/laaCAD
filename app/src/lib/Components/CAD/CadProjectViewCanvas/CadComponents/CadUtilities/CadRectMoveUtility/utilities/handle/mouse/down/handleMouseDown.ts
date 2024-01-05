import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import { get } from "svelte/store";
import type { TypeLastSelectedElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";

function handleMouseDown(
  e: MouseEvent | TouchEvent,
  propCadElementObj: TypeElement<TypeElementGeometryTypeAll>,
) {
  get(lastSelectedCadElementStore).htmlElement = e.currentTarget as SVGRectElement;
  get(lastSelectedCadElementStore).dataElement = propCadElementObj;

  if (get(lastSelectedCadElementStore).dataElement.geometryType === "Line") {
    type TypePointToMove = keyof typeof propCadElementObj.geometryData.position;
    const lineStore = get(lastSelectedCadElementStore) as TypeLastSelectedElementStore<"Line">;
    const startEndString = get(lastSelectedCadElementStore).htmlElement.classList[0] as TypePointToMove;

    lineStore.pointToMove = startEndString;
  }
}

export { handleMouseDown };
