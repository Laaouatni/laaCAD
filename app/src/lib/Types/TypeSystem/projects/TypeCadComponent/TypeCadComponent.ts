import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeGroup } from "$types/TypeSystem/projects/TypeCadComponent/TypeGroup/TypeGroup";

type TypeElementOrGroup = TypeElement<TypeElementGeometryTypeAll> | TypeGroup;

export type { TypeElementOrGroup };
