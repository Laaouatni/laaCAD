import { get } from "svelte/store";
import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import type { TypeLastSelectedElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

function setPositionOfLastSelectedLineElement(
  axisName: keyof TypeCoordinateXYZ,
  svgPoint: SVGPoint,
) {
  const lastSelectedLineStoreValue = get(
    lastSelectedCadElementStore,
  ) as TypeLastSelectedElementStore<"Line">;
  const startEndString = lastSelectedLineStoreValue.pointToMove;
  const { position } = lastSelectedLineStoreValue.dataElement.geometryData;

  position[startEndString][axisName] = svgPoint?.[axisName];

  lastSelectedCadElementStore.set(get(lastSelectedCadElementStore));
}

export { setPositionOfLastSelectedLineElement };
