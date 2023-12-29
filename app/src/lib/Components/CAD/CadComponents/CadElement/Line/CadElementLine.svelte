<script lang="ts">
  import { appStore } from "$data/appStore";
  import { getElementProperty } from "$logic/getElementProperty";
  import { replaceElementInTheRightPosition } from "$logic/replaceElementInTheRightPosition";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

  export let CadElementObj: TypeElement<"Line">;
  export let projectName: string;

  function updateCadElementEventListenerState() {
    $appStore.system.projects[projectName].elements =
      replaceElementInTheRightPosition(
        $appStore.system.projects[projectName].elements,
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
></line>
