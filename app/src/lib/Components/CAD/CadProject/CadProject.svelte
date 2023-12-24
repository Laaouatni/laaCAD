<script lang="ts">
  import { appStore } from "$data/appStore";
  
  export let projectName: string;
  
  console.log($appStore.system.projects[projectName]);
</script>

a