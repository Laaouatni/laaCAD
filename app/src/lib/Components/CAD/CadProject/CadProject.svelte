<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";
  import { appStore } from "$data/appStore";

  export let projectName: string;

  const positioning = {
    allAvaiableAxisPositions: {
      min: "Min",
      center: "Mid",
      max: "Max",
    },
    choosedPosition: {
      get x() {
        return positioning.allAvaiableAxisPositions.min;
      },
      get y() {
        return positioning.allAvaiableAxisPositions.min;
      },
    },
  };

  const viewPort = {
    x: 400,
    y: 400,
  };

  const viewBox = Object.values({
    start: Object.values({
      x: 0,
      y: 0,
    }).join(" "),
    end: Object.values({
      x: 400,
      y: 400,
    }).join(" "),
  }).join(" ");

  const preserveAspectRatio = Object.values({
    centerViewBoxInsideViewPort: `x${positioning.choosedPosition.x}Y${positioning.choosedPosition.y}`,
    implementScaling: "meet",
  }).join(" ");
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
