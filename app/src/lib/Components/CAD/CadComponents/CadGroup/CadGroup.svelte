<script lang="ts">
  import Card from "$components/UI/UiCard/UiCard.svelte";
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  export let childElements: TypeElementOrGroup[];
</script>

{#each childElements as element}
  <Card>
    {#if element.type === "CadGroup"}
      <svelte:self childElements={element.elements}/>
    {:else}
      normale 🗣️🗣️
    {/if}
  </Card>
{/each}
