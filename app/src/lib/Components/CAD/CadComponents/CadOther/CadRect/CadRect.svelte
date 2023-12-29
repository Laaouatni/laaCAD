<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import {
    lastSelectedStore,
    type TypeLastSelectedStore,
  } from "$data/selected/lastSelectedStore";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  export let x: number;
  export let y: number;

  let rectClass: string = "";
  export {rectClass as class};

  const MULTIPLICATOR_VALUE = 4;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  );

  $: heightWidthRect = lineThickness * MULTIPLICATOR_VALUE;
  $: correctionValueToCenter = heightWidthRect / 2;

  function handleOnMouseDown(e: MouseEvent) {
    $lastSelectedStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedStore.dataElement = CadElementObj;
    if ($lastSelectedStore.dataElement.geometryType === "Line") {
      ($lastSelectedStore as TypeLastSelectedStore<"Line">).pointToMove =
        $lastSelectedStore.htmlElement
          .classList[0] as keyof typeof CadElementObj.geometryData.position;
    }
  }

  function handleOnMouseUp(e: MouseEvent) {
    Object.keys($lastSelectedStore).forEach((key) => {
      $lastSelectedStore[key as keyof typeof $lastSelectedStore] = null;
    });
  }
</script>

<rect
  class={rectClass}
  height={heightWidthRect}
  width={heightWidthRect}
  fill="transparent"
  stroke-width={lineThickness}
  stroke="green"
  x={x - correctionValueToCenter}
  y={y - correctionValueToCenter}
  rx={lineThickness}
  on:mousedown={handleOnMouseDown}
  on:mouseup={handleOnMouseUp}
></rect>
