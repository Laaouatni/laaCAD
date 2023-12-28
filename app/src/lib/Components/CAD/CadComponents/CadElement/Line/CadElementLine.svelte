<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  import { CadElementObjState } from "$components/CAD/CadComponents/CadElement/CadElement.svelte";

  export let CadElementObj: TypeElement<"Line">;

  const thisState = new CadElementObjState(CadElementObj);

  $: if (CadElementObj.geometryData) {
    console.log("saaa");
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
  on:mouseover={() => {
    CadElementObj.geometryData.position.start.x += 40;
    thisState.CadUpdate();
  }}
></line>
