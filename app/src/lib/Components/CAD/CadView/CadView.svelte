<script lang="ts">
  import CadProject from "$components/CAD/CadProject/CadProject.svelte";
  import { appStore } from "$data/appStore";
  import Card from "$components/UI/UiCard/UiCard.svelte";
</script>

<Card class="border border-black w-full h-full">
  <span>i am the view 💀💀💀💀</span>
  
  <Card>
    {#each Object.entries($appStore.system.projects) as [key]}
      <CadProject projectName={key} />
    {/each}
  </Card>
</Card>

