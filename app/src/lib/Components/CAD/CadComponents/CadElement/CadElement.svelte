<script lang="ts">
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementCircle from "$components/CAD/CadComponents/CadElement/Circle/CadElementCircle.svelte";
  
  import { onMount } from "svelte";
  import { appStore } from "$data/appStore";

  import { replaceElementInTheRightPosition } from "$logic/replaceElementInTheRightPosition";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;
  export let projectName: string;

  const childComponents = {
    Line: CadElementLine,
    Circle: CadElementCircle,
  };

  $: choosedComponent =
    childComponents[CadElementObj.geometryType as keyof typeof childComponents];

  onMount(() => {
    document.addEventListener("onCadElementObjUpdate", (event) => {
      const updatedElement = (event as CustomEvent).detail;
      const modifiedElements = replaceElementInTheRightPosition(
        $appStore.system.projects[projectName].elements,
        updatedElement,
      );

      $appStore.system.projects[projectName].elements = modifiedElements;
    });
  });
</script>

<svelte:component this={choosedComponent} {CadElementObj} />
