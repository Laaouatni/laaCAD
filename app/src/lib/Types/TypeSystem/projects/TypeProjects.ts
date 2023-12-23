import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

type TypeProjects = {
  [fileName: string]: {
    elements: TypeElementOrGroup[];
  };
};

export type {
  TypeProjects
}