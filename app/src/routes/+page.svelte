<script>
  import CadNavigationBar from "$components/CAD/CadNavigationBar/CadNavigationBar.svelte";
  import CadProjectViewCanvas from "$components/CAD/CadProjectViewCanvas/CadProjectViewCanvas.svelte";
  import { lastSelectedProjectStore } from "$data/lastSelected/cadProject/lastSelectedCadProjectStore";
</script>

<CadNavigationBar />

{#if $lastSelectedProjectStore.projectName}
  <CadProjectViewCanvas
    compPropProjectName={$lastSelectedProjectStore.projectName}
  ></CadProjectViewCanvas>
{/if}
