<script lang="ts">
  import { browser } from "$app/environment";

  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import {
    lastSelectedStore,
    type TypeLastSelectedStore,
  } from "$data/selected/lastSelectedStore";
  
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
  
  import { onUpInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/up/onUpEventThatSupportsAllDevicesAction";
  import { onDownInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/down/onDownEventThatSupportsAllDevicesAction";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  export let x: number;
  export let y: number;

  let rectClass: string = "";
  export { rectClass as class };

  const MULTIPLICATOR_VALUE: number = 4;

  let isMobile: boolean = false;
  let isThisComponentSelected = false;

  $: if (browser) {
    isMobile = !!(
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement
    );
  };

  $: multiplicatorValueBasedOnDevice = isMobile
    ? MULTIPLICATOR_VALUE * 3
    : MULTIPLICATOR_VALUE;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  );

  $: heightWidthRect = lineThickness * multiplicatorValueBasedOnDevice;
  $: correctionValueToCenter = heightWidthRect / 2;

  function handleMouseDown(e: MouseEvent | TouchEvent) {
    isThisComponentSelected = true;

    $lastSelectedStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedStore.dataElement = CadElementObj;

    if ($lastSelectedStore.dataElement.geometryType === "Line") {
      type TypePointToMove = keyof typeof CadElementObj.geometryData.position;
      const lineStore = $lastSelectedStore as TypeLastSelectedStore<"Line">;
      const startEndString = $lastSelectedStore.htmlElement
        .classList[0] as TypePointToMove;

      lineStore.pointToMove = startEndString;
    }
  }

  function handleMouseUp() {
    isThisComponentSelected = false;

    Object.keys($lastSelectedStore).forEach((key) => {
      $lastSelectedStore[key as keyof typeof $lastSelectedStore] = null;
    });
  }
</script>

<rect
  class={rectClass}
  height={heightWidthRect}
  width={heightWidthRect}
  stroke-width={lineThickness}
  fill="transparent"
  stroke={isThisComponentSelected ? "green" : "transparent"}
  x={x - correctionValueToCenter}
  y={y - correctionValueToCenter}
  rx={lineThickness}
  use:onDownInputEventThatSupportsAllDevicesAction={handleMouseDown}
  use:onUpInputEventThatSupportsAllDevicesAction={handleMouseUp}
></rect>
