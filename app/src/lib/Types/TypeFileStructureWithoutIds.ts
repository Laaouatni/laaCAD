import type { TypeChangeChildTypeInPosition } from "$types/Utilities/TypeChangeChildTypeInPosition/TypeChangeChildTypeInPosition";
import type { TypeFileStructure } from "$types/TypeFileStructure";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

type TypeFileStructureWithoutIds = TypeChangeChildTypeInPosition<
  TypeFileStructure,
  TypeElementOrGroup,
  Omit<TypeElementOrGroup, "id">
>;

export type { TypeFileStructureWithoutIds };
