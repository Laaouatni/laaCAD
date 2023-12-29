<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import {
    lastSelectedStore,
    type TypeLastSelectedStore,
  } from "$data/selected/lastSelectedStore";

  export let CadElementObj: TypeElement<"Line">;

  const MULTIPLICATOR_VALUE = 4;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  );

  $: heightWidth = lineThickness * MULTIPLICATOR_VALUE;

  $: possiblePositions = Object.keys(
    CadElementObj.geometryData.position,
  ) as Array<keyof typeof CadElementObj.geometryData.position>;

  function handleOnMouseDown(e: MouseEvent) {
    $lastSelectedStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedStore.dataElement = CadElementObj;
    ($lastSelectedStore as TypeLastSelectedStore<"Line">).pointToMove = (
      e.currentTarget as SVGRectElement
    ).classList[0] as keyof typeof CadElementObj.geometryData.position;
  }

  function handleOnMouseUp(e: MouseEvent) {
    Object.keys($lastSelectedStore).forEach((key) => {
      ($lastSelectedStore as TypeLastSelectedStore<"Line">)[
        key as keyof typeof $lastSelectedStore
      ] = null;
    });
  }
</script>

{#each possiblePositions as thisPossiblePosition}
  <rect
    class={thisPossiblePosition}
    height={heightWidth}
    width={heightWidth}
    fill="transparent"
    stroke-width={lineThickness}
    stroke="orange"
    x={CadElementObj.geometryData.position[thisPossiblePosition].x -
      heightWidth / 2}
    y={CadElementObj.geometryData.position[thisPossiblePosition].y -
      heightWidth / 2}
    rx={lineThickness}
    on:mousedown={handleOnMouseDown}
    on:mouseup={handleOnMouseUp}
  ></rect>
{/each}
