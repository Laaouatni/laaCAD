import { get } from "svelte/store";
import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import type { TypeLastSelectedElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

function setPositionOfLastSelectedCircleElement(
  axisName: keyof TypeCoordinateXYZ,
  svgPoint: SVGPoint,
) {
  const lastSelectedCircleStoreValue = get(
    lastSelectedCadElementStore,
  ) as TypeLastSelectedElementStore<"Circle">;
  const { position } = lastSelectedCircleStoreValue.dataElement.geometryData;

  position[axisName] = svgPoint?.[axisName];
}

export { setPositionOfLastSelectedCircleElement };
