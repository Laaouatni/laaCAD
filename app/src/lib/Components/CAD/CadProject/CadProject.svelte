<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore";

  import { viewPort } from "$components/CAD/CadProject/utilities/viewPort";
  import { viewBox } from "$components/CAD/CadProject/utilities/viewBox";
  import { preserveAspectRatio } from "$components/CAD/CadProject/utilities/preserveAspectRatio";

  export let projectName: string;
</script>

<svg
  class="border"
  width={viewPort.x}
  height={viewPort.y}
  {viewBox}
  {preserveAspectRatio}
>
  <CadGroup childElements={$appStore.system.projects[projectName].elements} />
</svg>
