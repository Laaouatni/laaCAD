import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onMoveInputEventThatSupportsAllDevices(
  node: any ,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mousemove", "touchmove"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onMoveInputEventThatSupportsAllDevices };
