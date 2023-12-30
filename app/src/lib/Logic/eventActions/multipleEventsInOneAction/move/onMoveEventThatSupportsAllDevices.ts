import { multipleEventsInOneAction } from "$logic/eventActions/multipleEventsInOneAction/multipleEventsInOneAction";

function onMoveInputEventThatSupportsAllDevices(
  node: any ,
  callback: EventListenerOrEventListenerObject,
) {
  const eventsNames = ["mousemove", "touchmove"];

  multipleEventsInOneAction(node, eventsNames, callback);
}

export { onMoveInputEventThatSupportsAllDevices };
