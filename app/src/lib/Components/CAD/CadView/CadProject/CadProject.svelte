<script lang="ts">
  import CadGroup from "$components/CAD/CadView/CadProject/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore/appStore";
  import { viewPort } from "$components/CAD/CadView/CadProject/utilities/htmlPropUtilities/viewPort";
  import { viewBox as viewBoxFunction } from "$components/CAD/CadView/CadProject/utilities/htmlPropUtilities/viewBox/viewBox";
  import { preserveAspectRatio } from "$components/CAD/CadView/CadProject/utilities/htmlPropUtilities/preserveAspectRatio";
  import { lastSelectedStore } from "$data/selected/lastSelectedStore";
  import { onMoveInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/move/onMoveEventThatSupportsAllDevicesAction";
  import { cursorPoint } from "$components/CAD/CadView/CadProject/utilities/logic/cursorPoint";
  import { saveChangesInProjectElements } from "$components/CAD/CadView/CadProject/utilities/logic/saveChangesInProjectElements";
  import { moveCadElementLogic } from "$components/CAD/CadView/CadProject/utilities/logic/moveCadElementLogic";
  import { onMount } from "svelte";

  export let compPropProjectName: string;

  let pt: SVGPoint;
  let viewBox: string;
  let thisHtmlSvgElement: SVGSVGElement;

  onMount(() => {
    pt = thisHtmlSvgElement.createSVGPoint();
  });

  $: if ($appStore.system.projects[compPropProjectName]) {
    viewBox = viewBoxFunction(compPropProjectName);
  }

  function handleMouseMove(e: MouseEvent | TouchEvent) {
    const mousePosition = cursorPoint(e, thisHtmlSvgElement, pt);
    const isLeftMouseButtonPressed = (e as MouseEvent).buttons === 1;
    const isFingerTouchOnScreen = (e as TouchEvent).touches;

    const hasLastElementSelected = !Object.values($lastSelectedStore).every(
      (el) => el === null,
    );

    if (mousePosition) {
      if (
        (isLeftMouseButtonPressed || isFingerTouchOnScreen) &&
        hasLastElementSelected
      ) {
        moveCadElementLogic(mousePosition);
        saveChangesInProjectElements(
          compPropProjectName,
          $lastSelectedStore.dataElement,
        );
      }
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
  <CadGroup compPropChildElements={$appStore.system.projects[compPropProjectName].elements} />
</svg>
