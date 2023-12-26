import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypePushAllValuesElementFunctionProps } from "$components/CAD/CadProject/utilities/viewBox/getAllValuesThatHaveSameKey/pushAllValuesElement/pushAllValuesElement";

function pushAllValuesLine(props: TypePushAllValuesElementFunctionProps) {
  const thisLineElement = props.thisElement as TypeElement<"Line">;
  const thisPositionObj = thisLineElement.geometryData.position;

  const startValue =
    thisPositionObj.start[props.keyToFind as keyof TypeCoordinateXYZ];
  const endValue =
    thisPositionObj.end[props.keyToFind as keyof TypeCoordinateXYZ];

  props.output.push(startValue);
  props.output.push(endValue);
}

export { pushAllValuesLine };
