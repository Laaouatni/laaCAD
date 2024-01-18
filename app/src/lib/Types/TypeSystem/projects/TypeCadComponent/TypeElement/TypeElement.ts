import type { TypePropertiesIndividual } from "$types/TypeSystem/defaults/TypeProperties/TypeProperties";
import type { TypeElementGeometryData } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/data/TypeElementGeometryData";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

export type TypeElement<T extends TypeElementGeometryTypeAll> = {
  id?: `group-${number}-element-${number}`;
  type: "CadElement";
  geometryType: T;
  geometryData: TypeElementGeometryData<T>;
  properties?: TypePropertiesIndividual;
};
