import { get } from "svelte/store";
import { lastSelectedStore } from "$data/selected/lastSelectedStore";
import type { TypeLastSelectedStore } from "$data/selected/lastSelectedStore";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

function setPositionOfLastSelectedCircleElement(axisName: keyof TypeCoordinateXYZ, svgPoint: SVGPoint) {
  const lastSelectedCircleStoreValue = get(
    lastSelectedStore,
  ) as TypeLastSelectedStore<"Circle">;
  const { position } = lastSelectedCircleStoreValue.dataElement.geometryData;

  position[axisName] = svgPoint?.[axisName];
}

export {
  setPositionOfLastSelectedCircleElement
}
