import { allAvailableElementGeometryType } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import { allAvailableCoordinates } from "$types/TypeTrasforms/TypeCoordinate/TypeCoordinate";
import { get } from "svelte/store";
import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import { setPositionOfLastSelectedElement } from "$components/CAD/CadProjectViewCanvas/utilities/logic/setPositionOfLastSelectedElement/setPositionOfLastSelectedElement";

function moveCadElementLogic(svgPoint: SVGPoint) {
  allAvailableElementGeometryType.forEach((thisElementName) => {
    if (get(lastSelectedCadElementStore).dataElement.geometryType === thisElementName) {
      allAvailableCoordinates.forEach((axisName) => {
        setPositionOfLastSelectedElement(axisName, svgPoint)[thisElementName]();
      });
    }
  });
}

export { moveCadElementLogic };
