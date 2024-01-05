<script lang="ts">
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

  import CadElementLine from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Line/CadElementLine.svelte";
  import CadElementCircle from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Circle/CadElementCircle.svelte";

  export let compPropCadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  const childComponents = {
    Line: CadElementLine,
    Circle: CadElementCircle,
  };

  $: choosedComponent =
    childComponents[
      compPropCadElementObj.geometryType as keyof typeof childComponents
    ];
</script>

<svelte:component this={choosedComponent} {compPropCadElementObj} />
