<script lang="ts">
  import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
  import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
  import { constCadElementComponentsDataObj } from "$data/const/components/constCadElementComponentsDataObj";

  export let compPropCadElementObj: TypeElement<TypeElementGeometryTypeAll>;

  $: choosedComponent =
    constCadElementComponentsDataObj[
      compPropCadElementObj.geometryType as keyof typeof constCadElementComponentsDataObj
    ].svelteComponent;
</script>

<svelte:component this={choosedComponent} {compPropCadElementObj} />
