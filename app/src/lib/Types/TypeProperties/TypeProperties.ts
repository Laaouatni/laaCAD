import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { Optional } from "$types/Utilities/Optional/Optional";
import type { TypePropertiesIndividual } from "$types/TypeProperties/TypePropertiesIndividual/TypePropertiesIndividual";

type TypeProperties = { All: TypePropertiesIndividual } & {
  [propertyName in TypeElementGeometryTypeAll]?: Optional<TypePropertiesIndividual>;
};

export type { TypePropertiesIndividual, TypeProperties };
