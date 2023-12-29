<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import { lastSelectedLineStore } from "$data/selected/line/lastSelectedLineStore";

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
    $lastSelectedLineStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedLineStore.dataElement = CadElementObj;
    $lastSelectedLineStore.pointToMove = (e.currentTarget as SVGRectElement)
      .classList[0] as keyof typeof CadElementObj.geometryData.position;
  }

  function handleOnMouseUp(e: MouseEvent) {
    Object.keys($lastSelectedLineStore).forEach((key) => {
      $lastSelectedLineStore[key as keyof typeof $lastSelectedLineStore] = null;
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
