import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeCoordinate/TypeCoordinate";

function getAllValuesThatHaveSameKey(
  elementsArray: TypeElementOrGroup[],
  keyToFind: string,
): number[] {
  const output: number[] = [];

  elementsArray.forEach((thisElement) => {
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

export { getAllValuesThatHaveSameKey };
