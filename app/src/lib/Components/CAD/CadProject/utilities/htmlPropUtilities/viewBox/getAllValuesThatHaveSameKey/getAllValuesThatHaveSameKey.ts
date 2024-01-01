import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import {
  pushAllValuesLine,
  pushAllValuesCircle,
} from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";

function getAllValuesThatHaveSameKey(
  elementsArray: TypeElementOrGroup[],
  keyToFind: TypePushAllValuesElementFunctionProps["keyToFind"],
): number[] {
  const output: number[] = [];

  elementsArray.forEach((thisElement) => {
    if (thisElement.type === "CadElement") {
      switch (thisElement.geometryType) {
        case "Line":
          pushAllValuesLine({ thisElement, keyToFind, output });
          break;
        case "Circle":
          pushAllValuesCircle({ thisElement, keyToFind, output });
          break;
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
