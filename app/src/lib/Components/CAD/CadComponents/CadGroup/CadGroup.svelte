<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "../CadElement/CadElement.svelte";
  export let childElements: TypeElementOrGroup[];
</script>

<g>
  {#each childElements as thisElementObj, i}
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} />
    {:else}
      <CadElement CadElementObj={thisElementObj}></CadElement>
    {/if}
  {/each}
</g>
