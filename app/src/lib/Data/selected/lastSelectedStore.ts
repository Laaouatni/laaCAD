import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryDataPosition } from "$types/TypeCadComponent/TypeElement/geometry/data/TypeElementGeometryData";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import { writable } from "svelte/store";

export type TypeLastSelectedStore<T extends TypeElementGeometryTypeAll> = {
  htmlElement: SVGRectElement;
  dataElement: TypeElement<T>;
} & (T extends "Line"
  ? { pointToMove: keyof TypeElementGeometryDataPosition<"Line"> }
  : {});

export const lastSelectedStore = writable<
  TypeLastSelectedStore<TypeElementGeometryTypeAll>
>({
  htmlElement: null,
  dataElement: null,
  pointToMove: null,
});

// export const lastSelectedStore = writable({
//   htmlElement: null,
//   dataElement: null,
//   pointToMove: null,
// });
