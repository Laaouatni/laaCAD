<script lang="ts">
  import { appStore } from "$data/appStore";
  import { getElementProperty } from "$logic/getElementProperty";
  import { replaceElementInTheRightPosition } from "$logic/replaceElementInTheRightPosition";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import { onMount } from "svelte";

  export let CadElementObj: TypeElement<"Line">;
  export let projectName: string;

  function updateCadElementEventListenerState() {
    $appStore.system.projects[projectName].elements =
      replaceElementInTheRightPosition(
        $appStore.system.projects[projectName].elements,
        CadElementObj,
      );
  }

  let htmlLineElement: SVGLineElement;

  $: svg = htmlLineElement
    ? (htmlLineElement.closest("svg") as SVGSVGElement)
    : null;
  $: pt = svg ? svg.createSVGPoint() : null;

  function cursorPoint(evt: MouseEvent, svg: SVGSVGElement, pt: DOMPoint) {
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }
</script>

<line
  bind:this={htmlLineElement}
  id={CadElementObj.id}
  x1={CadElementObj.geometryData.position.start.x}
  y1={CadElementObj.geometryData.position.start.y}
  x2={CadElementObj.geometryData.position.end.x}
  y2={CadElementObj.geometryData.position.end.y}
  stroke-width={Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  )}
  stroke={String(
    getElementProperty({
      propertyToFind: "color",
      thisElementObj: CadElementObj,
    }),
  )}
  on:mousemove={(e) => {
    let pos = cursorPoint(e, svg, pt);
    CadElementObj.geometryData.position.start.x = pos.x;
    CadElementObj.geometryData.position.start.y = pos.y;
  }}
></line>
