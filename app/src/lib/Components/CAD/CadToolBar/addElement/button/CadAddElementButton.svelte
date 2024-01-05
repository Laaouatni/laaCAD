<script lang="ts">
  import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
  export let compPropCadElementGeometryType: TypeElementGeometryTypeAll;
</script>

<button
  class="group flex bg-light-300 dark:bg-dark-300 hover:bg-light-100 dark:hover:bg-dark-100 rounded-xl transition place-items-center overflow-hidden text-lg active:scale-[0.95] active:shadow-lg"
>
  <span
    class="font-[Inter] p-2 font-bold bg-light-400 dark:bg-dark-400 group-hover:bg-light-300 dark:group-hover:bg-dark-300 transition text-3xl"
    >+</span
  >
  <span class="px-4">{compPropCadElementGeometryType}</span>
</button>
