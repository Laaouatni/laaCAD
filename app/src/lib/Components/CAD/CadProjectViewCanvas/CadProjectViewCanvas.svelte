<script lang="ts">
  import CadGroup from "$components/CAD/CadProjectViewCanvas/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore/appStore";
  import { viewPort } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/viewPort";
  import { viewBox as viewBoxFunction } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/viewBox/viewBox";
  import { preserveAspectRatio } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/preserveAspectRatio";
  import { onMoveInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/move/onMoveEventThatSupportsAllDevicesAction";
  import { onMount } from "svelte";
  import { handleMouseMove } from "$components/CAD/CadProjectViewCanvas/utilities/handle/mouse/handleMouseDown";

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
</script>

<svg
  bind:this={thisHtmlSvgElement}
  class="border-light-400 dark:border-dark-400 -scale-y-100"
  width={viewPort.x}
  height={viewPort.y}
  {viewBox}
  {preserveAspectRatio}
  use:onMoveInputEventThatSupportsAllDevicesAction={(e) => {
    handleMouseMove(e, compPropProjectName, thisHtmlSvgElement, pt);
  }}
>
  <CadGroup
    compPropChildElements={$appStore.system.projects[compPropProjectName]
      .elements}
  />
</svg>
