<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import CadRectMoveUtility from "$components/CAD/CadProjectViewCanvas/CadComponents/CadUtilities/CadRectMoveUtility/CadRectMoveUtility.svelte";

  export let compPropCadElementObj: TypeElement<"Circle">;
</script>

<circle
  id={compPropCadElementObj.id}
  fill={"none"}
  cx={compPropCadElementObj.geometryData.position.x}
  cy={compPropCadElementObj.geometryData.position.y}
  r={compPropCadElementObj.geometryData.radius}
  stroke-width={Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: compPropCadElementObj,
    }),
  )}
  stroke={String(
    getElementProperty({
      propertyToFind: "color",
      thisElementObj: compPropCadElementObj,
    }),
  )}
></circle>

<CadRectMoveUtility
  {compPropCadElementObj}
  compPropX={compPropCadElementObj.geometryData.position.x}
  compPropY={compPropCadElementObj.geometryData.position.y}
></CadRectMoveUtility>
