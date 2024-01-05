<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import CadRectMoveUtility from "$components/CAD/CadView/CadProject/CadComponents/CadUtilities/CadRectMoveUtility/CadRectMoveUtility.svelte";

  export let compPropCadElementObj: TypeElement<"Line">;
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";

  $: possiblePositions = Object.keys(
    compPropCadElementObj.geometryData.position,
  ) as Array<keyof typeof compPropCadElementObj.geometryData.position>;

</script>

<line
  id={compPropCadElementObj.id}
  x1={compPropCadElementObj.geometryData.position.start.x}
  y1={compPropCadElementObj.geometryData.position.start.y}
  x2={compPropCadElementObj.geometryData.position.end.x}
  y2={compPropCadElementObj.geometryData.position.end.y}
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
></line>

{#each possiblePositions as thisPossiblePosition}
  <CadRectMoveUtility
    class={thisPossiblePosition}
    {compPropCadElementObj}
    compPropX={compPropCadElementObj.geometryData.position[thisPossiblePosition].x}
    compPropY={compPropCadElementObj.geometryData.position[thisPossiblePosition].y}
  ></CadRectMoveUtility>
{/each}
