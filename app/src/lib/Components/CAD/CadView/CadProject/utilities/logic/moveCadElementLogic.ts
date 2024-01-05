import { allAvailableElementGeometryType } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import { allAvailableCoordinates } from "$types/TypeTrasforms/TypeCoordinate/TypeCoordinate";
import { get } from "svelte/store";
import { lastSelectedStore } from "$data/selected/lastSelectedStore";
import { setPositionOfLastSelectedElement } from "$components/CAD/CadView/CadProject/utilities/logic/setPositionOfLastSelectedElement/setPositionOfLastSelectedElement";

function moveCadElementLogic(svgPoint: SVGPoint) {
  allAvailableElementGeometryType.forEach((thisElementName) => {
    if (get(lastSelectedStore).dataElement.geometryType === thisElementName) {
      allAvailableCoordinates.forEach((axisName) => {
        setPositionOfLastSelectedElement(axisName, svgPoint)[thisElementName]();
      });
    }
  });
}

export { moveCadElementLogic };
