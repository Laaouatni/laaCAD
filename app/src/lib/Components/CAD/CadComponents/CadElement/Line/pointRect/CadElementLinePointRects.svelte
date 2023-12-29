<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  export let CadElementObj: TypeElement<"Line">;

  const MULTIPLICATOR_VALUE = 4;

  $: lineThickness = Number(
    getElementProperty({
      propertyToFind: "thickness",
      thisElementObj: CadElementObj,
    }),
  );

  $: heightWidth = lineThickness * MULTIPLICATOR_VALUE;

  $: possiblePositions = Object.keys(
    CadElementObj.geometryData.position,
  ) as Array<keyof typeof CadElementObj.geometryData.position>;
</script>

{#each possiblePositions as thisPossiblePosition}
  <rect
    height={heightWidth}
    width={heightWidth}
    fill="transparent"
    stroke-width={lineThickness}
    stroke="orange"
    x={CadElementObj.geometryData.position[thisPossiblePosition].x -
      heightWidth / 2}
    y={CadElementObj.geometryData.position[thisPossiblePosition].y -
      heightWidth / 2}
    rx={lineThickness}
  ></rect>
{/each}
