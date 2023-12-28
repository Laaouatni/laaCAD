<script lang="ts">
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementCircle from "$components/CAD/CadComponents/CadElement/Circle/CadElementCircle.svelte";

  import { appStore } from "$data/appStore";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;
  export let projectName: string;

  const childComponents = {
    Line: CadElementLine,
    Circle: CadElementCircle,
  };

  let a = 0;

  // $: if(CadElementObj) {
  //   $appStore.system.projects[projectName].elements = replaceElement(
  //     $appStore.system.projects[projectName].elements,
  //     CadElementObj,
  //   );

  //   console.log(a++);
  // }

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

  $: choosedComponent =
    childComponents[CadElementObj.geometryType as keyof typeof childComponents];
</script>

<svelte:component this={choosedComponent} bind:CadElementObj />