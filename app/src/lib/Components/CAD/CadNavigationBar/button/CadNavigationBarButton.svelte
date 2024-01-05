<script lang="ts">
  import type { TypeProjects } from "$types/TypeSystem/projects/TypeProjects";
  import { lastSelectedProjectStore } from "$data/lastSelected/cadProject/lastSelectedCadProjectStore";

  import { handleOnClick } from "$components/CAD/CadNavigationBar/button/utilities/handle/click/handleClick";

  export let compPropProjectName: keyof TypeProjects & string;

  $: isThisProjectSelected =
    $lastSelectedProjectStore.projectName === compPropProjectName;
</script>

<button
  class="p-2 px-3 bg-light-200 dark:bg-dark-200 hover:bg-light-300 dark:hover:bg-dark-300 active:scale-x-[1.05] rounded-t-xl transition text-sm
  {isThisProjectSelected
    ? 'bg-light-400 dark:bg-dark-400 font-semibold border border-b-4 border-light-600 dark:border-dark-600 '
    : ''}"
  on:click={() => handleOnClick(compPropProjectName)}
>
  {compPropProjectName}
</button>
