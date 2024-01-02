<script lang="ts">
  import CadProject from "$components/CAD/CadView/CadProject/CadProject.svelte";
  import { appStore } from "$data/appStore/appStore";
  import Card from "$components/UI/UiCard/UiCard.svelte";
</script>

<Card class="border border-black w-full h-full grid grid-cols-2">
  {#each Object.entries($appStore.system.projects) as [key]}
    <span>{key}</span>
    <CadProject projectName={key} />
  {/each}
</Card>
