<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "$components/CAD/CadComponents/CadElement/CadElement.svelte";

  export let childElements: TypeElementOrGroup[];
  export let projectName: string;
</script>

{#each childElements as thisElementObj}
  <g class="{thisElementObj.type}-{thisElementObj.geometryType}">
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} {projectName} />
    {:else}
      <CadElement CadElementObj={thisElementObj} {projectName}></CadElement>
    {/if}
  </g>
{/each}
