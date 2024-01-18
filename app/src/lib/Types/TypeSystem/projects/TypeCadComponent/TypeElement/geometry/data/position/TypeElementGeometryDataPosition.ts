import type { TypeCoordinateXYZ } from "$types/TypeTrasforms/TypeTransfroms";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeElementGeometryTypeThatHasStartEnd } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/hasConditions/TypeElementGeometryTypeThatHas";

type TypeElementGeometryDataPosition<T extends TypeElementGeometryTypeAll> =
  T extends TypeElementGeometryTypeThatHasStartEnd
    ? {
        start: TypeCoordinateXYZ;
        end: TypeCoordinateXYZ;
      }
    : TypeCoordinateXYZ;

export type { TypeElementGeometryDataPosition };
