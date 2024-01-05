<script lang="ts">
  import { appStore } from "$data/appStore/appStore";
  import CadNavigationBarButton from "$components/CAD/CadNavigationBar/button/CadNavigationBarButton.svelte";

  $: allAvaibleProjectsNames = Object.keys($appStore.system.projects);
</script>

<nav class="flex bg-light-100 dark:bg-dark-100 gap-2 pt-1 px-1 overflow-auto">
  {#each allAvaibleProjectsNames as thisProject}
    <CadNavigationBarButton compPropProjectName={thisProject}></CadNavigationBarButton>
  {/each}
</nav>
