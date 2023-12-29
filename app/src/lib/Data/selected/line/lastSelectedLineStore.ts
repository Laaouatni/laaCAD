import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import { writable } from "svelte/store";

export type TypeSelectedLineStore = {
  htmlElement: SVGLineElement | SVGRectElement;
  dataElement: TypeElement<"Line">;
  pointToMove: "start" | "end";
};

export const lastSelectedLineStore = writable<TypeSelectedLineStore>({
  htmlElement: null,
  dataElement: null,
  pointToMove: null
});
