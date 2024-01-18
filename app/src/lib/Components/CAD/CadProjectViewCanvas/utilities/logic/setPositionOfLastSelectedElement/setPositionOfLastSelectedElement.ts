import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

import { setPositionOfLastSelectedCircleElement } from "$components/CAD/CadProjectViewCanvas/utilities/logic/setPositionOfLastSelectedElement/circle/setPositionOfLastSelectedCircleElement";
import { setPositionOfLastSelectedLineElement } from "$components/CAD/CadProjectViewCanvas/utilities/logic/setPositionOfLastSelectedElement/line/setPositionOfLastSelectedLineElement";

function setPositionOfLastSelectedElement(
  axisName: keyof TypeCoordinateXYZ,
  svgPoint: SVGPoint,
) {
  return {
    Circle: () => setPositionOfLastSelectedCircleElement(axisName, svgPoint),
    Line: () => setPositionOfLastSelectedLineElement(axisName, svgPoint),
  };
}

export { setPositionOfLastSelectedElement };
