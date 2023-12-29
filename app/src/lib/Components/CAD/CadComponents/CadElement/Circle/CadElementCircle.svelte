<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import CadRectMoveUtility from "$components/CAD/CadComponents/CadUtilities/CadRectMoveUtility/CadRectMoveUtility.svelte";

  export let CadElementObj: TypeElement<"Circle">;
</script>

<circle
  id={CadElementObj.id}
  fill={"none"}
  cx={CadElementObj.geometryData.position.x}
  cy={CadElementObj.geometryData.position.y}
  r={CadElementObj.geometryData.radius}
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
></circle>

<CadRectMoveUtility
  {CadElementObj}
  x={CadElementObj.geometryData.position.x}
  y={CadElementObj.geometryData.position.y}
></CadRectMoveUtility>
