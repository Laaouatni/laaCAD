import CadElementLine from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Line/CadElementLine.svelte";
import CadElementCircle from "$components/CAD/CadProjectViewCanvas/CadComponents/CadElement/Circle/CadElementCircle.svelte";
import type { SvelteComponent } from "svelte";
import type { TypeElementGeometryTypeAll } from "$types/TypeSystem/projects/TypeCadComponent/TypeElement/geometry/type/all/TypeElementGeometryTypeAll";

type TypeConstCadElementComponentsDataObj = {
  [key in TypeElementGeometryTypeAll]: {
    svelteComponent: typeof SvelteComponent;
  };
};

const constCadElementComponentsDataObj: TypeConstCadElementComponentsDataObj = {
  Line: {
    svelteComponent: CadElementLine as typeof SvelteComponent,
  },
  Circle: {
    svelteComponent: CadElementCircle as typeof SvelteComponent,
  },
};

export type { TypeConstCadElementComponentsDataObj };

export { constCadElementComponentsDataObj };
