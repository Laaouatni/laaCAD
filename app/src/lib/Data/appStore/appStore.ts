import { writable } from "svelte/store";
import { example } from "$data/exampleData";
import { setElementsWithNewGeneratedIds } from "$data/appStore/utilities/logic/setElementsWithNewGeneratedIds";
import type { TypeFileStructure } from "$types/TypeFileStructure";
import type { TypeProjects } from "$types/TypeSystem/projects/TypeProjects";

export const appStore = writable<TypeFileStructure>({
  system: {
    projects: {},
    defaults: {
      properties: {
        All: {
          thickness: 1,
          color: "#000000",
        },
      },
      preferences: {
        unitOfMeasurement: "mm",
      },
    },
  },
});

appStore.set(example);

let prevLength: {
  [projectName: keyof TypeProjects]: number;
} = {};

appStore.subscribe((value) => {
  const allProjectNames = Object.keys(value.system.projects);

  if (allProjectNames.length === 0) return;

  allProjectNames.forEach((projectName) => {
    const currentLength = value.system.projects[projectName].elements.length;
    if (!prevLength[projectName]) prevLength[projectName] = 0;
    if (currentLength === prevLength[projectName]) return;

    setElementsWithNewGeneratedIds(value.system.projects[projectName].elements);
    prevLength[projectName] = currentLength;
  });
});