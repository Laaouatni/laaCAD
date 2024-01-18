const allAvailableCoordinates = ["x", "y"] as const;

type TypeCoordinateXYZ = {
  [axisName in (typeof allAvailableCoordinates)[number]]: number;
};

export type { TypeCoordinateXYZ };
export { allAvailableCoordinates };
