import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onDownInputEventThatSupportsAllDevices(
  node: any,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mousedown", "touchstart"];

  multipleEventsInOneAction(node, eventsNames, callback);
}

export { onDownInputEventThatSupportsAllDevices };
