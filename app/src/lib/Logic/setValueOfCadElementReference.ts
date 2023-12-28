import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeGroup } from "$types/TypeCadComponent/TypeGroup/TypeGroup";

import { appStore } from "$data/appStore";
import { get } from "svelte/store";
import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

function setValueOfCadElementReference(
  id: TypeElement<TypeElementGeometryTypeAll>["id"] | TypeGroup["id"],
  projectName: string,
  value: any,
): any {
  const element = recursive(get(appStore).system.projects[projectName].elements);

  function recursive(elements: any[]): any {
    for(let i = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        Object.entries(value).forEach(([key, value]) => {
          elements[i][key] = value;
        });
        return elements[i];
      }
      if (elements[i].type === "CadGroup") return recursive(elements[i].elements);
    }
  }
}

export { setValueOfCadElementReference };
