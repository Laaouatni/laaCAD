import type { TypeProjects } from "$types/TypeSystem/projects/TypeProjects";
import type { TypeDefaults } from "$types/TypeSystem/defaults/TypeDefaults";

type TypeSystem = {
  projects: TypeProjects;
  defaults: TypeDefaults;
};

export type {
  TypeSystem
}