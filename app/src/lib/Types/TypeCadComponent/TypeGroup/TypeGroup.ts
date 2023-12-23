import type { TypeElementGeometryTypeGroupAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

type TypeGroup = {
  type: "CadGroup";
  geometryType: TypeElementGeometryTypeGroupAll;
  elements: TypeElementOrGroup[];
};

export type {
  TypeGroup
}