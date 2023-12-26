import type { TypeElementOrGroup } from "$types/TypeCadComponent/TypeCadComponent";

function getElementsWithNewGeneratedIds(
  elements: any[],
  elementId = 0,
  groupId = 0,
): TypeElementOrGroup[] {
  let output: any[] = elements;

  output.forEach((element) => {
    if (element.type === "CadGroup") {
      groupId++;
      element.id = `group-${groupId}`;
      element.elements = getElementsWithNewGeneratedIds(
        element.elements,
        0,
        groupId,
      );
    }
    if (element.type === "CadElement") {
      element.id = `group-${groupId}-element-${elementId}`;
      elementId++;
    }
  });

  return output;
}

export { getElementsWithNewGeneratedIds };
