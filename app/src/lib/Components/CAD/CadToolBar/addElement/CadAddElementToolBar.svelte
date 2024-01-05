<script lang="ts">
  import CadAddElementButton from "$components/CAD/CadToolBar/addElement/button/CadAddElementButton.svelte";
  import UiCard from "$components/UI/UiCard/UiCard.svelte";
  import { constCadElementComponentsDataObj } from "$data/const/components/constCadElementComponentsDataObj";
  import type { TypeConstCadElementComponentsDataObjEntries } from "$components/CAD/CadToolBar/addElement/utilities/types/TypeConstCadElementComponentsDataObjEntries";

  $: constCadElementComponentsDataObjEntries = Object.entries(
    constCadElementComponentsDataObj,
  ) as TypeConstCadElementComponentsDataObjEntries[];
</script>

<UiCard>
  <h3>aggiungi elemento:</h3>
  <div class="flex gap-2">
    {#each constCadElementComponentsDataObjEntries as thisCadElementComponentData}
      <CadAddElementButton compPropCadElementComponentData={thisCadElementComponentData} />
    {/each}
  </div>
</UiCard>
