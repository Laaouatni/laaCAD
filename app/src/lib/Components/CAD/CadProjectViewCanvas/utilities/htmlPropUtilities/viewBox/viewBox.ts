import { appStore } from "$data/appStore/appStore";
import { get } from "svelte/store";

import { getAllValuesThatHaveSameKey } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/viewBox/getAllValuesThatHaveSameKey/getAllValuesThatHaveSameKey";

const MIN = 50;

function viewBox(projectNameId: string): string {
  const projectElementsObj =
    get(appStore).system.projects[projectNameId].elements;

  if (projectElementsObj.length === 0) return new Array(4).fill(MIN).join(" ");

  const allXvalues = getAllValuesThatHaveSameKey(projectElementsObj, "x");
  const allYvalues = getAllValuesThatHaveSameKey(projectElementsObj, "y");

  const startObj = {
    x: Math.min(...allXvalues),
    y: Math.min(...allYvalues),
  };

  const endObj = {
    x: Math.max(...allXvalues) - startObj.x,
    y: Math.max(...allYvalues) - startObj.y,
  };

  if (endObj.x < MIN) endObj.x = MIN;
  if (endObj.y < MIN) endObj.y = MIN;

  const startEndObj = {
    start: Object.values(startObj).join(" "),
    end: Object.values(endObj).join(" "),
  };

  return Object.values(startEndObj).join(" ");
}

export { viewBox };
