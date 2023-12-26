<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "$components/CAD/CadComponents/CadElement/CadElement.svelte";

  export let childElements: TypeElementOrGroup[];
</script>

<g>
  {#each childElements as thisElementObj}
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} />
    {:else}
      <CadElement CadElementObj={thisElementObj}></CadElement>
    {/if}
  {/each}
</g>
