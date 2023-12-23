import type { TypePropertiesIndividual } from "$types/TypeProperties/TypeProperties";
import type { TypeElementGeometryData } from "$types/TypeCadComponent/TypeElement/geometry/data/TypeElementGeometryData";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

export type TypeElement<T extends TypeElementGeometryTypeAll> = {
  type: "Element";
  geometryType: T;
  geometryData: TypeElementGeometryData<T>;
  properties?: TypePropertiesIndividual;
};
