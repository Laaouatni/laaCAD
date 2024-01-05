import { allAvailableCoordinates } from "$types/TypeTrasforms/TypeCoordinate/TypeCoordinate";

function cursorPoint(
  e: MouseEvent | TouchEvent,
  parentHtmlSvg: SVGSVGElement,
  svgPoint: SVGPoint,
) {
  const isTouchEvent = (e as TouchEvent).touches;

  if (svgPoint) {
    allAvailableCoordinates.forEach((axisName) => {
      const clientName = `client${axisName.toUpperCase()}` as
        | "clientX"
        | "clientY";

      if (isTouchEvent) {
        svgPoint[axisName] = isTouchEvent[0][clientName];
      } else {
        svgPoint[axisName] = (e as MouseEvent)[clientName];
      }
    });

    const ctm = parentHtmlSvg.getScreenCTM();
    if (ctm) return svgPoint.matrixTransform(ctm.inverse());
  }
};

export {
  cursorPoint
}
