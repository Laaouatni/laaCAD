import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";

type TypePushAllValuesElementFunctionProps = {
  thisElement: TypeElement<TypeElementGeometryTypeAll>;
  keyToFind: keyof TypeCoordinateXYZ;
  output: number[];
};

export type { TypePushAllValuesElementFunctionProps };
