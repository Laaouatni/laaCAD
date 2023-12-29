<script lang="ts">
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementCircle from "$components/CAD/CadComponents/CadElement/Circle/CadElementCircle.svelte";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  const childComponents = {
    Line: CadElementLine,
    Circle: CadElementCircle,
  };

  $: choosedComponent =
    childComponents[CadElementObj.geometryType as keyof typeof childComponents];
</script>

<svelte:component this={choosedComponent} {CadElementObj} />
