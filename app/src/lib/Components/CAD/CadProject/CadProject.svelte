<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";

  import { appStore } from "$data/appStore";

  import { viewPort } from "$components/CAD/CadProject/utilities/viewPort";
  import { viewBox as viewBoxFunction } from "$components/CAD/CadProject/utilities/viewBox/viewBox";

  import { preserveAspectRatio } from "$components/CAD/CadProject/utilities/preserveAspectRatio";
  import { lastSelectedLineStore } from "$data/selected/line/lastSelectedLineStore";
  import { replaceElementInTheRightPosition } from "$logic/replaceElementInTheRightPosition";
  import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

  export let projectName: string;

  let viewBox: string;

  $: if ($appStore.system.projects[projectName]) {
    viewBox = viewBoxFunction(projectName);
  }

  let thisHtmlSvgElement: SVGSVGElement;
  $: pt = thisHtmlSvgElement
    ? (thisHtmlSvgElement.createSVGPoint() as DOMPoint)
    : undefined;

  function cursorPoint(e: MouseEvent) {
    if (pt && thisHtmlSvgElement) {
      pt.x = e.clientX;
      pt.y = e.clientY;

      const ctm = thisHtmlSvgElement.getScreenCTM();

      if (ctm) {
        return pt.matrixTransform(ctm.inverse());
      }
    }
  }

  function handleMouseMove(e: MouseEvent) {
    const mousePosition = cursorPoint(e);
    const isLeftMouseButtonPressed = e.buttons === 1;

    if (isLeftMouseButtonPressed) {
      if (
        Object.values($lastSelectedLineStore).every((el) => el !== undefined)
      ) {
        const axis: (keyof TypeCoordinateXYZ)[] = ["x", "y"];

        axis.forEach((axisName) => {
          $lastSelectedLineStore.dataElement.geometryData.position[
            $lastSelectedLineStore.pointToMove
          ][axisName] = mousePosition?.[axisName] ?? 0;
        });

        $appStore.system.projects[projectName].elements =
          replaceElementInTheRightPosition(
            $appStore.system.projects[projectName].elements,
            $lastSelectedLineStore.dataElement,
          );
      }
    }
  }

  $: console.log($lastSelectedLineStore);
</script>

<svg
  bind:this={thisHtmlSvgElement}
  class="border border-dashed border-light-400 dark:border-dark-400 -scale-y-100"
  width={viewPort.x}
  height={viewPort.y}
  {viewBox}
  {preserveAspectRatio}
  on:mousemove={handleMouseMove}
>
  <CadGroup
    childElements={$appStore.system.projects[projectName].elements}
    {projectName}
  />
</svg>
