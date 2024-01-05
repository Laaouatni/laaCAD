import type { TypeElementOrGroup } from "$types/TypeSystem/projects/TypeCadComponent/TypeCadComponent";

function returnReplacedElementInTheRightPosition(
  elements: TypeElementOrGroup[],
  newElement: TypeElementOrGroup,
): TypeElementOrGroup[] {
  return elements.map((element) => {
    if (element.id === newElement.id) {
      return newElement;
    } else if (element.type === "CadGroup") {
      return {
        ...element,
        elements: returnReplacedElementInTheRightPosition(
          element.elements,
          newElement,
        ),
      };
    } else {
      return element;
    }
  });
}

export { returnReplacedElementInTheRightPosition };
