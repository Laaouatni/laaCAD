function multipleEventsInOneAction(
  node: any,
  eventsNames: string[],
  callback: EventListenerOrEventListenerObject
) {
  return {
    add: () => {
      eventsNames.forEach((eventName) => {
        node.addEventListener(eventName, callback);
      });
    }, 
    remove: () => {
      eventsNames.forEach((eventName) => {
        node.removeEventListener(eventName, callback);
      });       
    }
  }
}

export { multipleEventsInOneAction };
