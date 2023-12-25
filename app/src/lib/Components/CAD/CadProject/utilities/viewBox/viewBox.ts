import { appStore } from "$data/appStore";
import { get } from "svelte/store";

import { getAllValuesThatHaveSameKey } from "$components/CAD/CadProject/utilities/viewBox/getAllValuesThatHaveSameKey/getAllValuesThatHaveSameKey";

function viewBox(projectNameId: string): string {
  const projectElementsObj =
    get(appStore).system.projects[projectNameId].elements;

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

  const startEndObj = {
    start: Object.values(startObj).join(" "),
    end: Object.values(endObj).join(" "),
  };

  return Object.values(startEndObj).join(" ");
}

export { viewBox };
