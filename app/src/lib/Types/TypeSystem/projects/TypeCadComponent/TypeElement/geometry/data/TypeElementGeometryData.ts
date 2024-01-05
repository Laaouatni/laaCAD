import type { TypeElementGeometryDataPosition } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/data/position/TypeElementGeometryDataPosition";
import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type {
  TypeElementGeometryTypeThatHasNotRotation,
  TypeElementGeometryTypeThatHasRadius,
} from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/hasConditions/TypeElementGeometryTypeThatHas";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

type TypeElementGeometryData<T extends TypeElementGeometryTypeAll> = {
  position: TypeElementGeometryDataPosition<T>;
} & (T extends TypeElementGeometryTypeThatHasRadius ? { radius: number } : {}) &
  (T extends TypeElementGeometryTypeThatHasNotRotation
    ? {}
    : { rotation: TypeCoordinateXYZ });

export type { TypeElementGeometryData, TypeElementGeometryDataPosition };
