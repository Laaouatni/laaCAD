import CadElementLine from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Line/CadElementLine.svelte";
import CadElementCircle from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Circle/CadElementCircle.svelte";
import type { SvelteComponent } from "svelte";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";
import { newCadLineElementObj } from "$components/CAD/CadProjectViewCanvas/utilities/logic/returnNewCadElementObj/returnNewCadElementObj";
import { newCadCircleElementObj } from "$components/CAD/CadProjectViewCanvas/utilities/logic/returnNewCadElementObj/returnNewCadElementObj";

type TypeConstCadElementComponentsDataObj = {
  [key in TypeElementGeometryTypeAll]: {
    svelteComponent: typeof SvelteComponent;
    createNewElementObjFunction: typeof newCadLineElementObj | typeof newCadCircleElementObj;
  };
};

const constCadElementComponentsDataObj: TypeConstCadElementComponentsDataObj = {
  Line: {
    svelteComponent: CadElementLine as typeof SvelteComponent,
    createNewElementObjFunction: newCadLineElementObj
  },
  Circle: {
    svelteComponent: CadElementCircle as typeof SvelteComponent,
    createNewElementObjFunction: newCadCircleElementObj
  },
};

export type { TypeConstCadElementComponentsDataObj };

export { constCadElementComponentsDataObj };
