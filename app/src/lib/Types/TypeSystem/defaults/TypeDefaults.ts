import type { TypeProperties } from "$types/TypeSystem/defaults/TypeProperties/TypeProperties";
import type { TypePreferences } from "$types/TypeSystem/defaults/TypePreferences/TypePreferences";

type TypeDefaults = {
  properties: TypeProperties;
  preferences: TypePreferences;
};

export type {
  TypeDefaults
}