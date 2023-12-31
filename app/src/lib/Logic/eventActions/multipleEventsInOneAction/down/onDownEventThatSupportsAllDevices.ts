import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onDownInputEventThatSupportsAllDevices(
  node: any,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mousedown", "touchstart"];
  const baseFunctionLogic = multipleEventsInOneAction(node, eventsNames, callback);
  
  baseFunctionLogic.add();
  return baseFunctionLogic.remove;
}

export { onDownInputEventThatSupportsAllDevices };
