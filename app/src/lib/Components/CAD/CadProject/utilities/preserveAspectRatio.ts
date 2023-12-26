import { positioning } from "$components/CAD/CadProject/utilities/positioning";

type TypePreserveAspectRatio = {
  positionOfViewBoxInsideViewPort: string;
  implementScaling: "meet" | "slice" | "none";
};

const preserveAspectRatioObject: TypePreserveAspectRatio = {
  positionOfViewBoxInsideViewPort: `x${positioning.choosedPosition.x}Y${positioning.choosedPosition.y}`,
  implementScaling: "meet",
};

const preserveAspectRatio = Object.values(preserveAspectRatioObject).join(" ");

export { preserveAspectRatio };
