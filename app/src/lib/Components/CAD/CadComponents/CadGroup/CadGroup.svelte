<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "$components/CAD/CadComponents/CadElement/CadElement.svelte";

  export let childElements: TypeElementOrGroup[];
  export let projectName: string;
</script>

<g>
  {#each childElements as thisElementObj}
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} {projectName} />
    {:else}
      <CadElement CadElementObj={thisElementObj} {projectName}></CadElement>
    {/if}
  {/each}
</g>
