import type { TypeElementOrGroup } from "$types/TypeSystem/projects/TypeCadComponent/TypeCadComponent";

type TypeProjects = {
  [fileName: string]: {
    elements: TypeElementOrGroup[];
  };
};

export type { TypeProjects };
