import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";
import type { TypeElement } from "$types/TypeCadComponent/TypeElement/TypeElement";
import type { TypeElementGeometryTypeAll } from "$types/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import type { TypeGroup } from "$types/TypeCadComponent/TypeGroup/TypeGroup";

function setElementsWithNewGeneratedIds(
  elements: Omit<TypeElementOrGroup, "id">[],
  elementId = 0,
  groupId = 0,
) {
  return elements.map((element) => {
    if (element.type === "CadGroup") {
      const thisGroupElement = element as TypeGroup;
      groupId++;
      thisGroupElement.id = `group-${groupId}`;
      thisGroupElement.elements = setElementsWithNewGeneratedIds(
        thisGroupElement.elements,
        0,
        groupId,
      );
    }
    if (element.type === "CadElement") {
      const thisCadElement = element as TypeElement<TypeElementGeometryTypeAll>;
      thisCadElement.id = `group-${groupId}-element-${elementId}`;
      elementId++;
    }
    return element;
  }) as TypeElementOrGroup[];
}

export { setElementsWithNewGeneratedIds };
