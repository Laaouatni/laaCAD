<script lang="ts">
  import { getDeviceType } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/logic/getDeviceType";
  import { sizeMultiplier } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/const/sizeMultiplier";
  import { getElementProperty } from "$logic/getElementProperty";
  import { onUpInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/up/onUpEventThatSupportsAllDevicesAction";
  import { onDownInputEventThatSupportsAllDevicesAction } from "$logic/eventActions/multipleEventsInOneAction/down/onDownEventThatSupportsAllDevicesAction";
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
  import { handleMouseDown } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/handle/mouse/down/handleMouseDown";
  import { handleMouseUp } from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/utilities/handle/mouse/up/handleMouseUp";

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
  use:onDownInputEventThatSupportsAllDevicesAction={(e) => {
    e.preventDefault();
    isThisComponentSelected = true;
    handleMouseDown(e, compPropCadElementObj);
  }}
  use:onUpInputEventThatSupportsAllDevicesAction={() => {
    isThisComponentSelected = false;
    handleMouseUp();
  }}
></rect>
