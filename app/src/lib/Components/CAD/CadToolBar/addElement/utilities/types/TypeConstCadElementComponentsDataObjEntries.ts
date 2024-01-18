import type { TypeConstCadElementComponentsDataObj } from "$data/const/components/constCadElementComponentsDataObj";

type TypeConstCadElementComponentsDataObjEntries = [
  keyof TypeConstCadElementComponentsDataObj,
  TypeConstCadElementComponentsDataObj[keyof TypeConstCadElementComponentsDataObj],
];

export type { TypeConstCadElementComponentsDataObjEntries };