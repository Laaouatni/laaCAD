<script>
  import CadBottomBar from "$components/CAD/CadBottomBar/CadBottomBar.svelte";
  import CadNavigationBar from "$components/CAD/CadNavigationBar/CadNavigationBar.svelte";
  import CadProjectViewCanvas from "$components/CAD/CadProjectViewCanvas/CadProjectViewCanvas.svelte";
  import CadToolBar from "$components/CAD/CadToolBar/CadToolBar.svelte";
  import { lastSelectedProjectStore } from "$data/lastSelected/cadProject/lastSelectedCadProjectStore";
</script>

<nav>
  <CadToolBar />
  <CadNavigationBar />
</nav>

{#if $lastSelectedProjectStore.projectName}
  <CadProjectViewCanvas
    compPropProjectName={$lastSelectedProjectStore.projectName}
  ></CadProjectViewCanvas>
{/if}

<CadBottomBar></CadBottomBar>
