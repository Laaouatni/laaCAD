import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { Optional } from "$types/Utilities/Optional/Optional";
import type { TypePropertiesIndividual } from "$types/TypeSystem/defaults/TypeProperties/TypePropertiesIndividual/TypePropertiesIndividual";

type TypeProperties = { All: TypePropertiesIndividual } & {
  [propertyName in TypeElementGeometryTypeAll]?: Optional<TypePropertiesIndividual>;
};

export type { TypePropertiesIndividual, TypeProperties };
