import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import { writable } from "svelte/store";

export type TypeSelectedLineStore = {
  $lastSelectedLineStore: any;
  htmlElement: SVGLineElement;
  dataElement: TypeElement<"Line">;
  pointToMove: "start" | "end";
};

export const lastSelectedLineStore = writable<TypeSelectedLineStore>({
  htmlElement: undefined,
  dataElement: undefined,
  pointToMove: undefined
});
