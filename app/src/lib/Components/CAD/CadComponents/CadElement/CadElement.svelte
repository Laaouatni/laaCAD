<script lang="ts">
  import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementPoint from "$components/CAD/CadComponents/CadElement/Point/CadElementPoint.svelte";
  import CadElementCircle from "$components/CAD/CadComponents/CadElement/Circle/CadElementCircle.svelte";

  export let CadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  const childComponents = {
    Line: CadElementLine,
    Point: CadElementPoint,
    Circle: CadElementCircle,
  };

  $: choosedComponent =
    childComponents[CadElementObj.geometryType as keyof typeof childComponents];
</script>

<!-- I know...
  don't touch this, is correct, 
  it is just typescript that complains. 
  I don't want to make my code complex just because of typescript 
-->
<svelte:component this={choosedComponent} {CadElementObj} />
