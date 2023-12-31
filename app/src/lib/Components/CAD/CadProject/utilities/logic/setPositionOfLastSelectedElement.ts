import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import {
  lastSelectedStore,
  type TypeLastSelectedStore,
} from "$data/selected/lastSelectedStore";
import { get } from "svelte/store";

function setPositionOfLastSelectedElement(
  axisName: keyof TypeCoordinateXYZ,
  svgPoint: DOMPoint,
) {
  return {
    Circle: () => setCirclePosition(),
    Line: () => setLinePosition(),
  };

  function setLinePosition() {
    (
      get(lastSelectedStore) as TypeLastSelectedStore<"Line">
    ).dataElement.geometryData.position[
      (get(lastSelectedStore) as TypeLastSelectedStore<"Line">).pointToMove
    ][axisName] = svgPoint?.[axisName] ?? 0;
  }

  function setCirclePosition() {
    (
      get(lastSelectedStore) as TypeLastSelectedStore<"Circle">
    ).dataElement.geometryData.position[axisName] = svgPoint?.[axisName] ?? 0;
  }
}

export {
  setPositionOfLastSelectedElement
}
