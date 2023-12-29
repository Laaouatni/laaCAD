import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import { writable } from "svelte/store";

export type TypeSelectedCircleStore = {
  htmlElement: SVGCircleElement | SVGRectElement;
  dataElement: TypeElement<"Circle">;
};

export const lastSelectedCircleStore = writable<TypeSelectedCircleStore>({
  htmlElement: null,
  dataElement: null,
});
