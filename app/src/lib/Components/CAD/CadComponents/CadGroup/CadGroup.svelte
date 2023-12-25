<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "../CadElement/CadElement.svelte";
  export let childElements: TypeElementOrGroup[];

  import { getElementProperty } from "$logic/getElementProperty";
</script>

{#each childElements as thisElementObj, i}
  <g>
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} />
    {:else}
      <CadElement CadElementObj={thisElementObj}></CadElement>
    {/if}
  </g>
{/each}
