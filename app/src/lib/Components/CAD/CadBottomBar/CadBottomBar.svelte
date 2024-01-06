<script lang="ts">
  import UiCard from "$components/UI/UiCard/UiCard.svelte";
  import { lastSelectedCadElementStore } from "$data/lastSelected/cadElement/lastSelectedCadElementStore";
  import { slide } from "svelte/transition";
</script>

<nav class="bg-light-100 dark:bg-dark-100 text-sm">
  {#if $lastSelectedCadElementStore.dataElement}
    <div class="flex gap-4 m-2" transition:slide>
      {#each Object.entries($lastSelectedCadElementStore.dataElement.geometryData.position) as [key, value]}
        <UiCard class="!flex-row gap-4">
          <div class="font-bold">
            {key}
          </div>
          <div >
            {#each Object.entries(value) as [key2, value2]}
              <div class="flex gap-2">
                <span class="uppercase">{key2}</span>
                <span class="tabular-nums">{Number(value2).toFixed(4)}</span>
              </div>
            {/each}
          </div>
        </UiCard>
      {/each}
    </div>
  {/if}
</nav>
