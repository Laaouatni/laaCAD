import type { TypeElementGeometryTypeGroupAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/group/TypeElementGeometryTypeGroupAll";

const allAvailableElementGeometryType = ["Line", "Circle"] as const;
type TypeElementGeometryTypeAll =
  (typeof allAvailableElementGeometryType)[number];

export type { TypeElementGeometryTypeAll, TypeElementGeometryTypeGroupAll };

export { allAvailableElementGeometryType };
