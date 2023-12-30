function multipleEventsInOneAction(
  node: any,
  eventsNames: string[],
  callback: EventListenerOrEventListenerObject
) {
  eventsNames.forEach((eventName) => {
    node.addEventListener(eventName, callback);
  });

  return () => {
    eventsNames.forEach((eventName) => {
      node.removeEventListener(eventName, callback);
    });
  };
}

export { multipleEventsInOneAction };
