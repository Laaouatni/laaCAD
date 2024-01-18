<script lang="ts">
  import type { TypeConstCadElementComponentsDataObjEntries } from "$components/CAD/CadToolBar/addElement/utilities/types/TypeConstCadElementComponentsDataObjEntries";
  export let compPropCadElementComponentData: TypeConstCadElementComponentsDataObjEntries;
  import { lastSelectedProjectStore } from "$data/lastSelected/cadProject/lastSelectedCadProjectStore";
  import { appStore } from "$data/appStore/appStore";

  $: key = compPropCadElementComponentData[0];
  $: value = compPropCadElementComponentData[1];

  function handleClick() {
    if(!$lastSelectedProjectStore.projectName) return;
    
    const project = $appStore.system.projects[$lastSelectedProjectStore.projectName];

    if(key === "Line") {
      const generatedObj = value.createNewElementObjFunction({ x:0, y: 0}, { x: 100, y: 100});
      project.elements.push(generatedObj);
    } 
    if(key === "Circle") {
      const generatedObj = value.createNewElementObjFunction({ x:0, y: 0}, 100);
      project.elements.push(generatedObj);
    }
    
    appStore.set({
      system: {
        ...$appStore.system,
        projects: {
          ...$appStore.system.projects,
          [$lastSelectedProjectStore.projectName]: {
            ...project,
            elements: project.elements
          }
        }
      }
    })
  }
</script>

<button
  on:click={handleClick}
  class="group flex bg-light-300 dark:bg-dark-300 hover:bg-light-100 dark:hover:bg-dark-100 rounded-xl transition place-items-center overflow-hidden text-lg active:scale-[0.95] active:shadow-lg"
>
  <span
    class="font-[Inter] p-2 font-bold bg-light-400 dark:bg-dark-400 group-hover:bg-light-300 dark:group-hover:bg-dark-300 transition text-3xl"
    >+</span
  >
  <span class="px-4">{key}</span>
</button>
