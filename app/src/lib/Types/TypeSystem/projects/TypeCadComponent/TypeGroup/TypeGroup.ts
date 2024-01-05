import type { TypeElementGeometryTypeGroupAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeElementOrGroup } from "$types/TypeSystem/projects/TypeCadComponent/TypeCadComponent";

type TypeGroup = {
  id?: `group-${number}`;
  type: "CadGroup";
  geometryType: TypeElementGeometryTypeGroupAll;
  elements: TypeElementOrGroup[];
};

export type { TypeGroup };
