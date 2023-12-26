import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import {
  pushAllValuesLine,
  pushAllValuesCircle,
  type TypePushAllValuesElementFunctionProps,
} from "$components/CAD/CadProject/utilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";

function getAllValuesThatHaveSameKey(
  elementsArray: TypeElementOrGroup[],
  keyToFind: string,
): number[] {
  const output: number[] = [];

  elementsArray.forEach((thisElement) => {
    if (thisElement.type === "CadElement") {
      const pushAllValuesElementFunctionProps: TypePushAllValuesElementFunctionProps =
        { thisElement, keyToFind, output };
      
      switch (thisElement.geometryType) {
        case "Line":
          pushAllValuesLine(pushAllValuesElementFunctionProps);
          break;
        case "Circle":
          pushAllValuesCircle(pushAllValuesElementFunctionProps);
          break;
        default:
          return new Error("did you created a new element? it's seems that the logic of your app contains a new one and you didn't add the logic about that")
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
