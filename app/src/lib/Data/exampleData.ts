import type { TypeFileStructure } from "$lib/Types/TypeFileStructure";

export const example: TypeFileStructure = {
  system: {
    projects: {
      firstProjectName: {
        elements: [
          {
            type: "Element",
            geometryType: "Line",
            geometryData: {
              position: {
                start: {
                  x: 0,
                  y: 0,
                  z: 0
                },
                end: {
                  x: 100,
                  y: 100,
                  z: 0
                },
              },
              rotation: {
                x: 0,
                y: 0,
                z: 0,
              },
            },
            properties: {
              thickness: 5,
              color: "#FF0000",
            },
          },
          {
            type: "Element",
            geometryType: "Point",
            geometryData: {
              position: {
                x: 0,
                y: 0,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: 0,
              },
            },
          },
          {
            type: "Element",
            geometryType: "Circle",
            geometryData: {
              position: {
                x: 100,
                y: 100,
                z: 0
              },
              radius: 50,
              rotation: {
                x: 0,
                y: 0,
                z: 0,
              },
            },
          },
          {
            type: "Group",
            geometryType: "Rectangle",
            elements: [
              {
                type: "Element",
                geometryType: "Line",
                geometryData: {
                  position: {
                    start: {
                      x: 0,
                      y: 0,
                      z:0
                    },
                    end: {
                      x: 100,
                      y: 100,
                      z: 0
                    },
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                  },
                },
                properties: {
                  thickness: 5,
                  color: "#FF0000",
                },
              },
            ],
          },
        ],
      },
    },
    defaults: {
      properties: {
        "All": {
          thickness: 1,
          color: "#000000",
        },
        Point: {
          color: "##0000FF",
        },
      },
      preferences: {
        unitOfMeasurement: "mm",
      },
    },
  },
};
