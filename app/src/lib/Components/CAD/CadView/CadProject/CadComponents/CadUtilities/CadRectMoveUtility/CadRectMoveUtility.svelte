<script lang="ts">
  import { getDeviceType } from "$components/CAD/CadView/CadProject/CadComponents/CadUtilities/CadRectMoveUtility/utilities/logic/getDeviceType";
  import { sizeMultiplier } from "$components/CAD/CadView/CadProject/CadComponents/CadUtilities/CadRectMoveUtility/utilities/const/sizeMultiplier";
  import { lastSelectedStore } from "$data/selected/lastSelectedStore";
  import { getElementProperty } from "$logic/getElementProperty";
  import { onUpInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/up/onUpEventThatSupportsAllDevicesAction";
  import { onDownInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/down/onDownEventThatSupportsAllDevicesAction";
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeLastSelectedStore } from "$data/selected/lastSelectedStore";
  import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  let rectClass: string = "";
  export { rectClass as class };

  export let compPropCadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  export let compPropX: number;
  export let compPropY: number;

  let isThisComponentSelected: boolean = false;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: compPropCadElementObj,
    }),
  );

  $: heightWidthRect =
    lineThickness *
    sizeMultiplier[getDeviceType() as keyof typeof sizeMultiplier];

  $: correctionValueToCenter = heightWidthRect / 2;

  function handleMouseDown(e: MouseEvent | TouchEvent) {
    isThisComponentSelected = true;

    $lastSelectedStore.htmlElement = e.currentTarget as SVGRectElement;
    $lastSelectedStore.dataElement = compPropCadElementObj;

    if ($lastSelectedStore.dataElement.geometryType === "Line") {
      type TypePointToMove = keyof typeof compPropCadElementObj.geometryData.position;
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
  x={compPropX - correctionValueToCenter}
  y={compPropY - correctionValueToCenter}
  rx={lineThickness}
  use:onDownInputEventThatSupportsAllDevicesAction={handleMouseDown}
  use:onUpInputEventThatSupportsAllDevicesAction={handleMouseUp}
></rect>
