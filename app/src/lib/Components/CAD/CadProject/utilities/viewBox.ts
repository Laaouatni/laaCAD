import { appStore } from "$data/appStore";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import { get } from "svelte/store";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeCoordinate/TypeCoordinate";

function viewBox(projectNameId: string) {
  const projectElementsObj =
    get(appStore).system.projects[projectNameId].elements;

  const allXvalues = getAllValuesThatHaveSameKey(projectElementsObj, "x");
  const allYvalues = getAllValuesThatHaveSameKey(projectElementsObj, "y");

  return Object.values({
    start: Object.values({
      x: Math.min(...allXvalues),
      y: Math.min(...allYvalues),
    }).join(" "),
    end: Object.values({
      x: Math.max(...allXvalues),
      y: Math.max(...allYvalues),
    }).join(" "),
  }).join(" ");
}

function getAllValuesThatHaveSameKey(
  elementsArray: TypeElementOrGroup[],
  keyToFind: string,
): number[] {
  const output: number[] = [];

  elementsArray.forEach((thisElement, i) => {
    if (thisElement.type === "CadElement") {
      if (thisElement.geometryType === "Line") {
        const thisLineElement = thisElement as TypeElement<"Line">;
        const thisPositionObj = thisLineElement.geometryData.position;
        
        const startValue =
          thisPositionObj.start[keyToFind as keyof TypeCoordinateXYZ];
        const endValue =
          thisPositionObj.end[keyToFind as keyof TypeCoordinateXYZ];

        output.push(startValue);
        output.push(endValue);
      } else {
        output.push(
          thisElement.geometryData.position[
            keyToFind as keyof TypeCoordinateXYZ
          ],
        );
      }
    }

    if (thisElement.type === "CadGroup") {
      output.push(
        ...getAllValuesThatHaveSameKey(thisElement.elements, keyToFind),
      );
    }
  });

  return output;
}

export { viewBox };
