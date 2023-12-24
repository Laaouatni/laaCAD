<script>
  import "../app.pcss";
</script>

<main class="bg-light-50 dark:bg-dark-50 dark:text-light-50 text-dark-50 p-3">
  <slot />
</main>

<style lang="postcss">
  :global(html, body, main) {
    @apply h-full w-full;
  }
</style>
