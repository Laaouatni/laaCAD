import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onUpInputEventThatSupportsAllDevices(
  node: any,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mouseup", "touchend"];

  multipleEventsInOneAction(node, eventsNames, callback);
}

export { onUpInputEventThatSupportsAllDevices };
