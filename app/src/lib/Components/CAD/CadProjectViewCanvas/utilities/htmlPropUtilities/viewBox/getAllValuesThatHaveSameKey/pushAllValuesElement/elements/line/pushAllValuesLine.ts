import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";
import { getElementProperty } from "$logic/getElementProperty";

function pushAllValuesLine(props: TypePushAllValuesElementFunctionProps) {
  const thisLineElement = props.thisElement as TypeElement<"Line">;
  const thisPositionObj = thisLineElement.geometryData.position;

  const dividedThicknessValue =
    Number(
      getElementProperty({
        thisElementObj: thisLineElement,
        propertyToFind: "thickness",
      }),
    ) / 2;

  Object.keys(thisPositionObj).forEach((key) => {
    const thisKey = key as keyof typeof thisPositionObj;
    const baseValue = thisPositionObj[thisKey][props.keyToFind];

    props.output.push(baseValue + dividedThicknessValue);
    props.output.push(baseValue - dividedThicknessValue);
  });
}

export { pushAllValuesLine };
