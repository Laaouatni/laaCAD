<script lang="ts">
  import CadGroup from "$components/CAD/CadComponents/CadGroup/CadGroup.svelte";

  import { appStore } from "$data/appStore";

  import { viewPort } from "$components/CAD/CadProject/utilities/viewPort";
  import { viewBox as viewBoxFunction } from "$components/CAD/CadProject/utilities/viewBox/viewBox";

  import { preserveAspectRatio } from "$components/CAD/CadProject/utilities/preserveAspectRatio";

  export let projectName: string;

  let viewBox: string;

  $: if ($appStore.system.projects[projectName]) {
    viewBox = viewBoxFunction(projectName);
  }

  let isDragging = false;
  let lastClickElement: SVGLineElement | null;

  function handleMouseDown() {
    isDragging = true;
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleMouseMove(e: MouseEvent) {
    if (isDragging) {
      if (e.target !== e.currentTarget) {
        e.target?.addEventListener("mouseenter", () => {
          lastClickElement = e.target as SVGLineElement;
        });
      }

      const arrViewBox = e.currentTarget.getAttribute("viewBox").split(" ");

      const dataViewBox = {
        start: {
          x: arrViewBox[0],
          y: arrViewBox[1],
        },
        end: {
          x: arrViewBox[2],
          y: arrViewBox[3],
        },
        total: {
          get x() {
            return dataViewBox.end.x - dataViewBox.start.x;
          },
          get y() {
            return dataViewBox.end.y - dataViewBox.start.y;
          },
        },
      };

      console.log("draffi");

      if (lastClickElement) {
        const pointPositions = {
          svg: {
            x:
              (dataViewBox.end.x /
                e.currentTarget.getBoundingClientRect().width) *
              relativeCoords(e).x,
            y:
              (dataViewBox.end.y /
                e.currentTarget.getBoundingClientRect().height) *
              relativeCoords(e).y,
          },
          mouse: {
            x: relativeCoords(e).x,
            y: relativeCoords(e).y,
          },
        };

        console.log(JSON.stringify(pointPositions, null, 4));
        lastClickElement.setAttribute("x1", `${pointPositions.svg.x}`);
        lastClickElement.setAttribute("y1", `${pointPositions.svg.y}`);
      }
    }
  }

  function relativeCoords(event: MouseEvent) {
    var bounds = event.target.getBoundingClientRect();
    var x = event.clientX - bounds.left;
    var y = event.clientY - bounds.top;
    return { x, y };
  }
</script>

<svg
  class="border border-dashed border-light-400 dark:border-dark-400 {false ? "-scale-y-100" : ""}"
  width={viewPort.x}
  height={viewPort.y}
  {viewBox}
  {preserveAspectRatio}
  on:mousedown={handleMouseDown}
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
>
  <CadGroup
    childElements={$appStore.system.projects[projectName].elements}
    {projectName}
  />
</svg>
