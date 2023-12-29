<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import { lastSelectedCircleStore } from "$data/selected/circle/lastSelectedCircleStore";

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
    $lastSelectedCircleStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedCircleStore.dataElement = CadElementObj;
  }

  function handleOnMouseUp(e: MouseEvent) {
    Object.keys($lastSelectedCircleStore).forEach((key) => {
      $lastSelectedCircleStore[key as keyof typeof $lastSelectedCircleStore] = null;
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
