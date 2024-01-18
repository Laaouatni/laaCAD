import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onUpInputEventThatSupportsAllDevicesAction(
  node: Node,
  callback: void,
) {
  const eventsNames = ["mouseup", "touchend"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onUpInputEventThatSupportsAllDevicesAction };
