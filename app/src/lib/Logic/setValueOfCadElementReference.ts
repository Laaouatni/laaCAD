import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeGroup } from "$types/TypeCadComponent/TypeGroup/TypeGroup";

import { appStore } from "$data/appStore";
import { get } from "svelte/store";

function setValueOfCadElementReference(
  id: TypeElement<TypeElementGeometryTypeAll>["id"] | TypeGroup["id"],
  projectName: string,
  value: any,
): any {
  const project = get(appStore).system.projects[projectName];
  const element = recursive(project.elements);

  function recursive(elements: any[]): any {
    for (const element of elements) {
      if (element.id === id) {
        Object.entries(value).forEach(([key, value]) => {
          element[key] = value;
        });
        return element;
      }
      if (element.type === "CadGroup") return recursive(element.elements);
    }
  }
}

export { setValueOfCadElementReference };
