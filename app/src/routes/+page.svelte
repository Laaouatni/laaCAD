<script lang="ts">
  import View from "$lib/View/View.svelte";

  import type { TypeFileStructure } from "$lib/Types/example copy";

  let my: TypeFileStructure = {
    system: {
      projects: {
        helloworld: {
          elements: [
            {
              type: "Group",
              elements: [
                {
                  type: "Element",
                  geometryType: "Circle",
                  geometryData: {
                    radius: 50,
                    position: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                    rotation: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                  },
                },
                {
                  type: "Group",
                  elements: [],
                },
              ],
            },
          ],
        },
        anotherName: {
          elements: [
            {
              type: "Group",
              elements: [
                {
                  type: "Element",
                  geometryType: "Line",
                  geometryData: {
                    position: {
                      start: {
                        x: 0,
                        y: 0,
                        z: 0,
                      },
                      end: {
                        x: 0,
                        y: 0,
                        z: 0,
                      },
                    },
                    rotation: {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                  },
                },
                {
                  type: "Group",
                  elements: [{
                    type: "Element",
                    geometryType: "Point",
                    geometryData: {
                      position: {
                        x: 0,
                        y: 0,
                        z: 0
                      }
                    }
                  }],
                },
              ],
            },
          ],
        },
      },
    },
    default: {
      All: {
        thickness: 1,
        color: "#FF0000",
      },
    },
    preferences: {
      unitOfMeasurement: "mm",
    },
  };
</script>

<View></View>
