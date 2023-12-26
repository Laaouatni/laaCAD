import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

type TypePushAllValuesElementFunctionProps = {
  thisElement: TypeElement<TypeElementGeometryTypeAll>;
  keyToFind: string;
  output: number[];
}

export type { TypePushAllValuesElementFunctionProps };