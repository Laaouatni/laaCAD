import type { TypeColor } from "$types/TypeSystem/defaults/TypeProperties/color/TypePropertiesColor";

type TypePropertiesIndividual = {
  thickness: number;
  color: TypeColor;
};

type TypeKeyOfPropertiesIndividual = keyof TypePropertiesIndividual;
type TypeValueOfPropertiesIndividual<T extends keyof TypePropertiesIndividual> = TypePropertiesIndividual[T];

export type {
  TypePropertiesIndividual,
  TypeKeyOfPropertiesIndividual,
  TypeValueOfPropertiesIndividual,
}