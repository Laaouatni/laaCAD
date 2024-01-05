import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryDataPosition } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/data/TypeElementGeometryData";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import { writable } from "svelte/store";

export type TypeLastSelectedElementStore<T extends TypeElementGeometryTypeAll> =
  {
    htmlElement: SVGRectElement;
    dataElement: TypeElement<T>;
  } & (T extends "Line"
    ? { pointToMove: keyof TypeElementGeometryDataPosition<"Line"> }
    : {});

export const lastSelectedCadElementStore = writable<
  TypeLastSelectedElementStore<TypeElementGeometryTypeAll>
>({
  htmlElement: null,
  dataElement: null,
  pointToMove: null,
});
