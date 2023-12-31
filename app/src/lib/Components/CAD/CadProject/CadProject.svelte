<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore";
  import { viewPort } from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewPort";
  import { viewBox as viewBoxFunction } from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewBox/viewBox";
  import { preserveAspectRatio } from "$components/CAD/CadProject/utilities/htmlPropUtilities/preserveAspectRatio";
  import { lastSelectedStore } from "$data/selected/lastSelectedStore";
  import { onMoveInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/move/onMoveEventThatSupportsAllDevicesAction";
  import { cursorPoint } from "$components/CAD/CadProject/utilities/logic/cursorPoint";
  import { saveChangesInProjectElements } from "$components/CAD/CadProject/utilities/logic/saveChangesInProjectElements";
  import { moveCadElementLogic } from "$components/CAD/CadProject/utilities/logic/moveCadElementLogic";

  export let projectName: string;

  let viewBox: string;
  let thisHtmlSvgElement: SVGSVGElement;
  let pt: SVGPoint;

  $: if(thisHtmlSvgElement) {
    pt = thisHtmlSvgElement.createSVGPoint();
  }

  $: if ($appStore.system.projects[projectName]) {
    viewBox = viewBoxFunction(projectName);
  }

  function handleMouseMove(e: MouseEvent | TouchEvent) {
    const mousePosition = cursorPoint(e, thisHtmlSvgElement, pt);
    const isLeftMouseButtonPressed = (e as MouseEvent).buttons === 1;
    const isFingerTouchOnScreen = (e as TouchEvent).touches;

    const hasLastElementSelected = !Object.values($lastSelectedStore).every(
      (el) => el === null,
    );

    if (
      (isLeftMouseButtonPressed || isFingerTouchOnScreen) &&
      hasLastElementSelected
    ) {
      moveCadElementLogic(mousePosition);
      saveChangesInProjectElements(projectName, $lastSelectedStore.dataElement);
    }
  }
</script>

<svg
  bind:this={thisHtmlSvgElement}
  class="border border-dashed border-light-400 dark:border-dark-400 -scale-y-100"
  width={viewPort.x}
  height={viewPort.y}
  {viewBox}
  {preserveAspectRatio}
  use:onMoveInputEventThatSupportsAllDevicesAction={handleMouseMove}
>
  <CadGroup childElements={$appStore.system.projects[projectName].elements} />
</svg>
