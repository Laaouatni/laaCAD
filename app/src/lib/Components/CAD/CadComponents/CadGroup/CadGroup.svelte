<script lang="ts">
  import Card from "$components/UI/UiCard/UiCard.svelte";
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  import CadElement from "../CadElement/CadElement.svelte";
  export let childElements: TypeElementOrGroup[];
</script>

{#each childElements as thisElementObj}
  <Card>
    {#if thisElementObj.type === "CadGroup"}
      <svelte:self childElements={thisElementObj.elements}/>
    {:else}
      <CadElement CadElementObj={thisElementObj}></CadElement>
    {/if}
  </Card>
{/each}
