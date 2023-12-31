import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onUpInputEventThatSupportsAllDevices(
  node: any,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mouseup", "touchend"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onUpInputEventThatSupportsAllDevices };
