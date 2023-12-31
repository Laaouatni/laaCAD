function returnReplacedElementInTheRightPosition(elements: any[], newElement: any): any[] {
  return elements.map((element) => {
    if (element.id === newElement.id) {
      return newElement;
    } else if (element.type === "CadGroup") {
      return {
        ...element,
        elements: returnReplacedElementInTheRightPosition(element.elements, newElement),
      };
    } else {
      return element;
    }
  });
}

export { returnReplacedElementInTheRightPosition };