<script lang="ts">
  import { getDeviceType } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/logic/getDeviceType";
  import { sizeMultiplier } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/const/sizeMultiplier";
  import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
  import { getElementProperty } from "$logic/getElementProperty";
  import { onUpInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/up/onUpEventThatSupportsAllDevicesAction";
  import { onDownInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/down/onDownEventThatSupportsAllDevicesAction";
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeLastSelectedElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
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

    $lastSelectedCadElementStore.htmlElement =
      e.currentTarget as SVGRectElement;
    $lastSelectedCadElementStore.dataElement = compPropCadElementObj;

    if ($lastSelectedCadElementStore.dataElement.geometryType === "Line") {
      type TypePointToMove =
        keyof typeof compPropCadElementObj.geometryData.position;
      const lineStore =
        $lastSelectedCadElementStore as TypeLastSelectedElementStore<"Line">;
      const startEndString = $lastSelectedCadElementStore.htmlElement
        .classList[0] as TypePointToMove;

      lineStore.pointToMove = startEndString;
    }
  }

  function handleMouseUp() {
    isThisComponentSelected = false;

    Object.keys($lastSelectedCadElementStore).forEach((key) => {
      $lastSelectedCadElementStore[
        key as keyof typeof $lastSelectedCadElementStore
      ] = null;
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
