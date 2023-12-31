import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";
import { getElementProperty } from "$logic/getElementProperty";

function pushAllValuesCircle(props: TypePushAllValuesElementFunctionProps) {
  const thisCircleElement = props.thisElement as TypeElement<"Circle">;
  const thisPositionObj = thisCircleElement.geometryData.position;

  const centerValue =
    thisPositionObj[props.keyToFind as keyof TypeCoordinateXYZ];
  const thisRadius = thisCircleElement.geometryData.radius;

  const thicknessValue = Number(
    getElementProperty({
      thisElementObj: thisCircleElement,
      propertyToFind: "thickness",
    }),
  ) / 2;

  props.output.push(centerValue - thisRadius - thicknessValue);
  props.output.push(centerValue - thisRadius + thicknessValue);
  
  props.output.push(centerValue + thisRadius - thicknessValue);
  props.output.push(centerValue + thisRadius + thicknessValue);
}

export { pushAllValuesCircle };
