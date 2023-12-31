import { get } from "svelte/store";
import { lastSelectedStore } from "$data/selected/lastSelectedStore";
import type { TypeLastSelectedStore } from "$data/selected/lastSelectedStore";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

function setPositionOfLastSelectedLineElement(axisName: keyof TypeCoordinateXYZ, svgPoint: SVGPoint) {
  const lastSelectedLineStoreValue = get(
    lastSelectedStore,
  ) as TypeLastSelectedStore<"Line">;
  const startEndString = lastSelectedLineStoreValue.pointToMove;
  const { position } = lastSelectedLineStoreValue.dataElement.geometryData;

  position[startEndString][axisName] = svgPoint?.[axisName];
}

export {
  setPositionOfLastSelectedLineElement
}