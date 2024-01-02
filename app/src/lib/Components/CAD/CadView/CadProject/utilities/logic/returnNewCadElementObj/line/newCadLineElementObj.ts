import type { TypePropertiesIndividual } from "$types/TypeProperties/TypeProperties";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";

function newCadLineElementObj(
  pointStartCoordinate: TypeCoordinateXYZ,
  pointEndCoordinate: TypeCoordinateXYZ,
  rotation?: TypeCoordinateXYZ,
  properties?: TypePropertiesIndividual,
) {
  const output: Omit<TypeElement<"Line">, "id"> = {
    type: "CadElement",
    geometryType: "Line",
    geometryData: {
      position: {
        start: pointStartCoordinate,
        end: pointEndCoordinate,
      },
      rotation: rotation || { x: 0, y: 0 },
    },
  };

  if (properties) output.properties = properties;

  return output;
}

export { newCadLineElementObj };
