import { newCadLineElementObj } from "$components/CAD/CadProjectViewCanvas/utilities/logic/returnNewCadElementObj/returnNewCadElementObj";
import { newCadCircleElementObj } from "$components/CAD/CadProjectViewCanvas/utilities/logic/returnNewCadElementObj/returnNewCadElementObj";
import type { TypeFileStructure } from "$types/TypeFileStructure";

export const example: TypeFileStructure = {
  system: {
    projects: {
      firstProjectName: {
        elements: [
          newCadLineElementObj({ x: 0, y: 0 }, { x: 100, y: 100 }),
          newCadLineElementObj({ x: 0, y: 0 }, { x: 200, y: 100 }),
          newCadCircleElementObj({ x: 0, y: 0 }, 50),
        ],
      },
      secondProjectName: {
        elements: [
          newCadLineElementObj({ x: 50, y: 0 }, { x: 100, y: 100 }),
          newCadLineElementObj({ x: 0, y: 50 }, { x: 200, y: 100 }),
          newCadLineElementObj({ x: 50, y: 50 }, { x: 100, y: 50 }),
          newCadCircleElementObj({ x: 0, y: 50 }, 50),
        ],
      },
    },
    defaults: {
      properties: {
        All: {
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
