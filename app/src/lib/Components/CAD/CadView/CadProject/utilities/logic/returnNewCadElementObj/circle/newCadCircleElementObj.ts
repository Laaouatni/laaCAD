import type { TypePropertiesIndividual } from "$types/TypeSystem/defaults/TypeProperties/TypeProperties";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";

function newCadCircleElementObj(
  pointCenterCoordinate: TypeCoordinateXYZ,
  radius: TypeElement<"Circle">["geometryData"]["radius"],
  rotation?: TypeCoordinateXYZ,
  properties?: TypePropertiesIndividual,
) {
  const output: Omit<TypeElement<"Circle">, "id"> = {
    type: "CadElement",
    geometryType: "Circle",
    geometryData: {
      position: pointCenterCoordinate,
      radius: radius,
      rotation: rotation || { x: 0, y: 0 },
    },
  };

  if (properties) output.properties = properties;

  return output;
}

export { newCadCircleElementObj };
