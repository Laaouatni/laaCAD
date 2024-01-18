import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onMoveInputEventThatSupportsAllDevicesAction(
  node: Node,
  callback: void,
) {
  const eventsNames = ["mousemove", "touchmove"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onMoveInputEventThatSupportsAllDevicesAction };
