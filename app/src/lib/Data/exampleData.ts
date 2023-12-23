import type { TypeFileStructure } from "$lib/Types/TypeFileStructure";

export const example: TypeFileStructure = {
  system: {
    projects: {
      firstProjectName: {
        elements: [
          {
            type: "CadElement",
            geometryType: "Line",
            geometryData: {
              position: {
                start: {
                  x: 0,
                  y: 0,
                },
                end: {
                  x: 100,
                  y: 100,
                },
              },
              rotation: {
                x: 0,
                y: 0,
              },
            },
            properties: {
              thickness: 5,
              color: "#FF0000",
            },
          },
          {
            type: "CadElement",
            geometryType: "Point",
            geometryData: {
              position: {
                x: 0,
                y: 0,
              },
              rotation: {
                x: 0,
                y: 0,
              },
            },
          },
          {
            type: "CadElement",
            geometryType: "Circle",
            geometryData: {
              position: {
                x: 100,
                y: 100,
              },
              radius: 50,
              rotation: {
                x: 0,
                y: 0,
              },
            },
          },
          {
            type: "CadGroup",
            geometryType: "Rectangle",
            elements: [
              {
                type: "CadElement",
                geometryType: "Line",
                geometryData: {
                  position: {
                    start: {
                      x: 0,
                      y: 0,
                    },
                    end: {
                      x: 100,
                      y: 100,
                    },
                  },
                  rotation: {
                    x: 0,
                    y: 0,
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
