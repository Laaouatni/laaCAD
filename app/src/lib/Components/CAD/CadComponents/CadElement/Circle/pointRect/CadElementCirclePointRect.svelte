<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import {
    lastSelectedStore,
    type TypeLastSelectedStore,
  } from "$data/selected/lastSelectedStore";

  export let CadElementObj: TypeElement<"Circle">;

  const MULTIPLICATOR_VALUE = 4;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  );

  $: heightWidth = lineThickness * MULTIPLICATOR_VALUE;

  function handleOnMouseDown(e: MouseEvent) {
    $lastSelectedStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedStore.dataElement = CadElementObj;
  }

  function handleOnMouseUp(e: MouseEvent) {
    Object.keys($lastSelectedStore).forEach((key) => {
      ($lastSelectedStore as TypeLastSelectedStore<"Circle">)[
        key as keyof typeof $lastSelectedStore
      ] = null;
    });
  }
</script>

<rect
  height={heightWidth}
  width={heightWidth}
  fill="transparent"
  stroke-width={lineThickness}
  stroke="orange"
  x={CadElementObj.geometryData.position.x - heightWidth / 2}
  y={CadElementObj.geometryData.position.y - heightWidth / 2}
  rx={lineThickness}
  on:mousedown={handleOnMouseDown}
  on:mouseup={handleOnMouseUp}
></rect>
