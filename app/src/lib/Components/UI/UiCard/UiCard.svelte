<script lang="ts">
  let twClass: string = "";
  export {twClass as class};
</script>

<div class="p-3 bg-light-200 dark:bg-dark-200 rounded-xl shadow-md shadow-light-300 dark:shadow-dark-300 border border-light-300 dark:border-dark-300 transition hover:scale-[0.99] flex flex-col flex-1 gap-3 place-items-center {twClass}">
  <slot />
</div>
