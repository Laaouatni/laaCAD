<script context="module">
  export class CadElementObjState {
    data: any;
    constructor(data: any) {
      this.data = data;
    }
    CadUpdate() {
      document.dispatchEvent(
        new CustomEvent("onCadElementObjUpdate", this.data),
      );
    }
    CadListen(fun: (event: any) => void) {
      document.addEventListener("onCadElementObjUpdate", fun);
    }
  }
</script>

<script lang="ts">
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementCircle from "$components/CAD/CadComponents/CadElement/Circle/CadElementCircle.svelte";

  import { onMount } from "svelte";
  import { appStore } from "$data/appStore";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;
  export let projectName: string;

  const childComponents = {
    Line: CadElementLine,
    Circle: CadElementCircle,
  };

  const thisState = new CadElementObjState(CadElementObj);

  onMount(() => {
    thisState.CadListen((event) => {
      const updatedElement = event;
      const modifiedElements = replaceElement(
        $appStore.system.projects[projectName].elements,
        updatedElement,
      );

      $appStore.system.projects[projectName].elements = modifiedElements;
    });
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

  $: choosedComponent =
    childComponents[CadElementObj.geometryType as keyof typeof childComponents];
</script>

<svelte:component this={choosedComponent} {CadElementObj} />
