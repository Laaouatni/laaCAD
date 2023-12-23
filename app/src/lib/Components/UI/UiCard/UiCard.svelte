<script lang="ts">
  let twClass: string = "";
  export {twClass as class};
</script>

<div class="p-4 bg-light-200 dark:bg-dark-200 rounded-xl shadow-xl shadow-light-300 dark:shadow-dark-300 border border-light-300 dark:border-dark-300 {twClass}">
  <slot />
</div>
