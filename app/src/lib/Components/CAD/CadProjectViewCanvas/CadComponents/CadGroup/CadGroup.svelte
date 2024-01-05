<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeSystem/projects/TypeCadComponent/TypeCadComponent";
  import CadElement from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/CadElement.svelte";

  export let compPropChildElements: TypeElementOrGroup[];
</script>

{#each compPropChildElements as thisElementObj}
  <g class="{thisElementObj.type}-{thisElementObj.geometryType}">
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self compPropChildElements={thisElementObj.elements} />
    {:else}
      <CadElement compPropCadElementObj={thisElementObj}></CadElement>
    {/if}
  </g>
{/each}
