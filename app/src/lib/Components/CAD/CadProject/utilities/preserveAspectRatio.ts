import { positioning } from "$components/CAD/CadProject/utilities/positioning";

const preserveAspectRatio = Object.values({
  centerViewBoxInsideViewPort: `x${positioning.choosedPosition.x}Y${positioning.choosedPosition.y}`,
  implementScaling: "meet",
}).join(" ");

export { preserveAspectRatio };