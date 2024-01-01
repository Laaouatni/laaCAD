<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import CadRectMoveUtility from "$components/CAD/CadView/CadProject/CadComponents/CadUtilities/CadRectMoveUtility/CadRectMoveUtility.svelte";

  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  $: possiblePositions = Object.keys(
    CadElementObj.geometryData.position,
  ) as Array<keyof typeof CadElementObj.geometryData.position>;

  export let CadElementObj: TypeElement<"Line">;
</script>

<line
  id={CadElementObj.id}
  x1={CadElementObj.geometryData.position.start.x}
  y1={CadElementObj.geometryData.position.start.y}
  x2={CadElementObj.geometryData.position.end.x}
  y2={CadElementObj.geometryData.position.end.y}
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
></line>

{#each possiblePositions as thisPossiblePosition}
  <CadRectMoveUtility
    class={thisPossiblePosition}
    {CadElementObj}
    x={CadElementObj.geometryData.position[thisPossiblePosition].x}
    y={CadElementObj.geometryData.position[thisPossiblePosition].y}
  ></CadRectMoveUtility>
{/each}
