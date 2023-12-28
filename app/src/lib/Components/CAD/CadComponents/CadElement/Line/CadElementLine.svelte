<script lang="ts">
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  export let CadElementObj: TypeElement<"Line">;

  function updateCadElementEventListenerState() {
    document.dispatchEvent(
      new CustomEvent("onCadElementObjUpdate", {detail: CadElementObj}),
    );
  }

  function handleMouseOver() {
    CadElementObj.geometryData.position.start.x += 40;
    updateCadElementEventListenerState();
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
  on:mouseover={handleMouseOver}
></line>
