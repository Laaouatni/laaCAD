import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onDownInputEventThatSupportsAllDevicesAction(
  node: Node,
  callback: void,
) {
  const eventsNames = ["mousedown", "touchstart"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onDownInputEventThatSupportsAllDevicesAction };
