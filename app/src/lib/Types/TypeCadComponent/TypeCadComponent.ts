import type { TypeElement } from "./TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeGroup } from "$types/TypeCadComponent/TypeGroup/TypeGroup";

type TypeElementOrGroup = TypeElement<TypeElementGeometryTypeAll> | TypeGroup;

export type {
  TypeElementOrGroup
}