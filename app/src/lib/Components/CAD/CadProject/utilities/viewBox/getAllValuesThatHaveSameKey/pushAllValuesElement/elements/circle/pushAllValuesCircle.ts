import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";

function pushAllValuesCircle(props: TypePushAllValuesElementFunctionProps) {
  const thisCircleElement = props.thisElement as TypeElement<"Circle">;
  const thisPositionObj = thisCircleElement.geometryData.position;

  const centerValue =
    thisPositionObj[props.keyToFind as keyof TypeCoordinateXYZ];
  const thisRadius = thisCircleElement.geometryData.radius;

  props.output.push(centerValue - thisRadius);
  props.output.push(centerValue + thisRadius);
}

export { pushAllValuesCircle };
