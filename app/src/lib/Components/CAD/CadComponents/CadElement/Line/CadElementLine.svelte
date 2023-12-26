<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import { setValueOfCadElementReference } from "$logic/setValueOfCadElementReference";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  export let CadElementObj: TypeElement<"Line">;

  $: if (CadElementObj) {
    setValueOfCadElementReference(
      CadElementObj.id,
      "firstProjectName",
      CadElementObj,
    );
  }
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
  on:mouseenter={() => {
    CadElementObj.geometryData.position.start.x += 30;
  }}
></line>
