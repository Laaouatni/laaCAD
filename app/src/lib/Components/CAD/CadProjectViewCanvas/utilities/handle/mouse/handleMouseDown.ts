import { cursorPoint } from "$components/CAD/CadProjectViewCanvas/utilities/logic/cursorPoint";
import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
import { get } from "svelte/store";
import { moveCadElementLogic } from "$components/CAD/CadProjectViewCanvas/utilities/logic/moveCadElementLogic";
import { saveChangesInProjectElements } from "$components/CAD/CadProjectViewCanvas/utilities/logic/saveChangesInProjectElements";

function handleMouseMove(
  e: MouseEvent | TouchEvent,
  thisProjectName: string,
  thisHtmlSvgElement: SVGSVGElement,
  thisSvgPoint: SVGPoint,
) {
  const mousePosition = cursorPoint(e, thisHtmlSvgElement, thisSvgPoint);
  const isLeftMouseButtonPressed = (e as MouseEvent).buttons === 1;
  const isFingerTouchOnScreen = (e as TouchEvent).touches;

  const hasLastElementSelected = !Object.values(
    get(lastSelectedCadElementStore),
  ).every((el) => el === null);

  if (mousePosition) {
    if (
      (isLeftMouseButtonPressed || isFingerTouchOnScreen) &&
      hasLastElementSelected
    ) {
      moveCadElementLogic(mousePosition);
      saveChangesInProjectElements(
        thisProjectName,
        get(lastSelectedCadElementStore).dataElement,
      );
    }
  }
}

export { handleMouseMove };
