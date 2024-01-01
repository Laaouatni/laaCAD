import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";
import { getElementProperty } from "$logic/getElementProperty";

function pushAllValuesCircle(props: TypePushAllValuesElementFunctionProps) {
  const thisCircleElement = props.thisElement as TypeElement<"Circle">;
  const thisPositionObj = thisCircleElement.geometryData.position;

  const centerValue = thisPositionObj[props.keyToFind];
  const thisRadius = thisCircleElement.geometryData.radius;

  const dividedThicknessValue =
    Number(
      getElementProperty({
        thisElementObj: thisCircleElement,
        propertyToFind: "thickness",
      }),
    ) / 2;

  props.output.push(centerValue - thisRadius - dividedThicknessValue);
  props.output.push(centerValue - thisRadius + dividedThicknessValue);

  props.output.push(centerValue + thisRadius - dividedThicknessValue);
  props.output.push(centerValue + thisRadius + dividedThicknessValue);
}

export { pushAllValuesCircle };
