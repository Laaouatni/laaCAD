import type { TypeProperties } from "$types/TypeProperties/TypeProperties";
import type { TypePreferences } from "$types/TypeSystem/defaults/preferences/TypePreferences";

type TypeDefaults = {
  properties: TypeProperties;
  preferences: TypePreferences;
};

export type {
  TypeDefaults
}