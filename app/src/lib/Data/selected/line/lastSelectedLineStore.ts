import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import { writable } from "svelte/store";
import type { Optional } from "$types/Utilities/Optional/Optional";

export type TypeSelectedLineStore = {
  htmlElement: SVGLineElement;
  dataElement: TypeElement<"Line">;
};

export const lastSelectedLineStore = writable<Optional<TypeSelectedLineStore>>({
  htmlElement: undefined,
  dataElement: undefined,
});
