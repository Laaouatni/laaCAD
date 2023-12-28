<script lang="ts">
  import { onMount } from "svelte";
  import { getElementProperty } from "$logic/getElementProperty";
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import { appStore } from "$data/appStore";

  export let CadElementObj: TypeElement<"Line">;
  export let projectName: string;

  let a = 0;

  const elementCopy = { ...CadElementObj }; // Create a copy
  
  onMount(() => {
    // Attach the custom event listener
    document.addEventListener("updateElement", (event) => {
      const updatedElement = event.detail;
      const modifiedElements = replaceElement(
        $appStore.system.projects[projectName].elements,
        updatedElement,
      );

      if (!deepEqual(modifiedElements, $appStore)) {
        $appStore.system.projects[projectName].elements = modifiedElements;
        console.log(CadElementObj.id, a++);
      }
    });

    // Emit the custom event to update the element
    document.dispatchEvent(new CustomEvent("updateElement", { detail: elementCopy }));
  });

  function replaceElement(elements: any[], newElement: any): any[] {
    return elements.map((element) => {
      if (element.id === newElement.id) {
        return newElement;
      } else if (element.type === "CadGroup") {
        return {
          ...element,
          elements: replaceElement(element.elements, newElement),
        };
      } else {
        return element;
      }
    });
  }

  function move() {
    elementCopy.geometryData.position.start.x += 40;
    return elementCopy;
  }

  function deepEqual(obj1: object, obj2: object): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
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
    document.dispatchEvent(new CustomEvent("updateElement", { detail: move() }));
  }}
></line>