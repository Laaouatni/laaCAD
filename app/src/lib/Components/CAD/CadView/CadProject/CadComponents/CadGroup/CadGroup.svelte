<script lang="ts">
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "$components/CAD/CadView/CadProject/CadComponents/CadElement/CadElement.svelte";

  export let childElements: TypeElementOrGroup[];
</script>

{#each childElements as thisElementObj}
  <g class="{thisElementObj.type}-{thisElementObj.geometryType}">
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements} />
    {:else}
      <CadElement CadElementObj={thisElementObj}></CadElement>
    {/if}
  </g>
{/each}
