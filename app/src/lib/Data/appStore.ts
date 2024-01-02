import { writable } from "svelte/store";
import { example } from "$lib/Data/exampleData";
import type { TypeFileStructureWithoutIds } from "$types/TypeFileStructureWithoutIds";
import { setElementsWithNewGeneratedIds } from "$logic/setElementsWithNewGeneratedIds";
import type { TypeFileStructure } from "$types/TypeFileStructure";

export const appStore = writable<TypeFileStructureWithoutIds | TypeFileStructure>({
  system: {
    projects: {},
    defaults: {
      properties: {
        All: {
          thickness: 1,
          color: "#000000",
        }
      },
      preferences: {
        unitOfMeasurement: "mm"
      }
    }
  },
});

appStore.set(example);

let prevLength: {
  [
    projectName: keyof TypeFileStructureWithoutIds["system"]["projects"]
  ]: number;
} = {};

appStore.subscribe((value) => {
  const allProjectNames = Object.keys(value.system.projects);
  
  if (allProjectNames.length === 0) return;

  allProjectNames.forEach((projectName) => {
    if (!prevLength[projectName]) prevLength[projectName] = 0;
    const currentLength = value.system.projects[projectName].elements.length;

    if (currentLength !== prevLength[projectName]) {
      setElementsWithNewGeneratedIds(
        value.system.projects[projectName].elements,
      );
      prevLength[projectName] = currentLength;
      console.log("new ids generated");
    }
  });
});
