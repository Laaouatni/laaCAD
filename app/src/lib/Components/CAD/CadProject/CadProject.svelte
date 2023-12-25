<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore";

  export let projectName: string;

  // $: console.log(
  //   JSON.stringify($appStore.system.projects[projectName].elements, null, 4),
  // );
</script>

<svg class="border" height="100%" width="100%">
  <CadGroup childElements={$appStore.system.projects[projectName].elements} />
</svg>
