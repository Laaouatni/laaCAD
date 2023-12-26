import type { TypeFileStructure } from "$types/TypeFileStructure";
import { getElementsWithNewGeneratedIds } from "$logic/getElementWithNewGeneratedIds";

export const example: TypeFileStructure = {
  system: {
    projects: {
      firstProjectName: {
        elements: getElementsWithNewGeneratedIds([
          {
            type: "CadElement",
            geometryType: "Line",
            geometryData: {
              position: {
                start: {
                  x: -50,
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
          },
          {
            type: "CadElement",
            geometryType: "Line",
            geometryData: {
              position: {
                start: {
                  x: 100,
                  y: 100,
                },
                end: {
                  x: 200,
                  y: 100,
                },
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
                geometryType: "Circle",
                geometryData: {
                  position: {
                    x: 400,
                    y: 0,
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                  },
                  radius: 50,
                },
                properties: {
                  thickness: 5,
                  color: "#FF0000",
                },
              },
              {
                type: "CadElement",
                geometryType: "Circle",
                geometryData: {
                  position: {
                    x: -50,
                    y: -100,
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                  },
                  radius: 50,
                },
                properties: {
                  thickness: 5,
                  color: "#FF0000",
                },
              },
              {
                type: "CadElement",
                geometryType: "Circle",
                geometryData: {
                  position: {
                    x: -50,
                    y: 200,
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                  },
                  radius: 50,
                },
                properties: {
                  thickness: 5,
                  color: "#FF0000",
                },
              },
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
                geometryType: "Line",
                geometryData: {
                  position: {
                    start: {
                      x: 200,
                      y: 100,
                    },
                    end: {
                      x: 400,
                      y: 200,
                    },
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                  },
                },
              },
              {
                type: "CadElement",
                geometryType: "Line",
                geometryData: {
                  position: {
                    start: {
                      x: 400,
                      y: 200,
                    },
                    end: {
                      x: 300,
                      y: 400,
                    },
                  },
                  rotation: {
                    x: 0,
                    y: 0,
                  },
                },
              },
            ],
          },
        ]),
      },
    },
    defaults: {
      properties: {
        "All": {
          thickness: 3,
          color: "#000000",
        },
      },
      preferences: {
        unitOfMeasurement: "mm",
      },
    },
  },
};
