import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";
import { getElementProperty } from "$logic/getElementProperty";

function pushAllValuesLine(props: TypePushAllValuesElementFunctionProps) {
  const thisLineElement = props.thisElement as TypeElement<"Line">;
  const thisPositionObj = thisLineElement.geometryData.position;

  const startValue =
    thisPositionObj.start[props.keyToFind as keyof TypeCoordinateXYZ];
  const endValue =
    thisPositionObj.end[props.keyToFind as keyof TypeCoordinateXYZ];

  const thicknessValue = Number(
    getElementProperty({
      thisElementObj: thisLineElement,
      propertyToFind: "thickness",
    }),
  ) / 2;

  props.output.push(startValue + thicknessValue);
  props.output.push(startValue - thicknessValue);

  props.output.push(endValue + thicknessValue);
  props.output.push(endValue - thicknessValue);
}

export { pushAllValuesLine };
