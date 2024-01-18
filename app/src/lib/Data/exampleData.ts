import { newCadLineElementObj } from "$components/CAD/CadProjectViewCanvas/utilities/logic/returnNewCadElementObj/returnNewCadElementObj";
import type { TypeFileStructure } from "$types/TypeFileStructure";

export const example: TypeFileStructure = {
  system: {
    projects: {
      firstProjectName: {
        elements: [],
      },
      secondProjectName: {
        elements: [],
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
