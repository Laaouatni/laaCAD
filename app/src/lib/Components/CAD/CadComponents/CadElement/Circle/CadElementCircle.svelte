<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  export let CadElementObj: TypeElement<"Circle">;
</script>

<circle
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
