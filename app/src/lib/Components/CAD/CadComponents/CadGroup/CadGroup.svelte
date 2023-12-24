<script lang="ts">
	import Card from '$components/UI/UiCard/UiCard.svelte';
  import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
  export let childElements: TypeElementOrGroup[];
</script>

{#each childElements as element}
  {#if element.type === "CadGroup"}
    <Card>gruppo 💀👍</Card>
    {:else}
    <Card>normale 🗣️🗣️</Card>
  {/if}
{/each}
