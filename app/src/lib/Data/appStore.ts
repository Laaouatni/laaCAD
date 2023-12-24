import { writable } from "svelte/store";
import type { TypeFileStructure } from "$lib/Types/TypeFileStructure";
import { example } from "$lib/Data/exampleData";

export const appStore = writable<TypeFileStructure>();

appStore.set(example);