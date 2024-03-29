import type { TypeElement } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type {
  TypeKeyOfPropertiesIndividual,
  TypeValueOfPropertiesIndividual,
} from "$types/TypeSystem/defaults/TypeProperties/TypePropertiesIndividual/TypePropertiesIndividual";

import { get } from "svelte/store";
import { appStore } from "$data/appStore/appStore";

type TypeFunctionGetElementPropertyProps = {
  propertyToFind: TypeKeyOfPropertiesIndividual;
  thisElementObj: TypeElement<TypeElementGeometryTypeAll>;
};

export function getElementProperty(
  props: TypeFunctionGetElementPropertyProps,
): TypeValueOfPropertiesIndividual<TypeKeyOfPropertiesIndividual> {
  const { propertyToFind, thisElementObj } = props;

  const thisElementHasProperties = thisElementObj.properties;
  const defaultsHasKeyGeometryType =
    get(appStore).system.defaults.properties[thisElementObj.geometryType];

  if (thisElementHasProperties) return thisElementHasProperties[propertyToFind];
  if (defaultsHasKeyGeometryType)
    return defaultsHasKeyGeometryType[
      propertyToFind
    ] as TypeValueOfPropertiesIndividual<TypeKeyOfPropertiesIndividual>;

  return get(appStore).system.defaults.properties.All[propertyToFind];
}
