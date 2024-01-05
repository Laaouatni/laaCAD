import { positioning } from "$components/CAD/CadProjectViewCanvas/utilities/htmlPropUtilities/positioning";

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
