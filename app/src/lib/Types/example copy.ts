type TypeCoordinateXYZ = { [axisName in "x" | "y" | "z"]: number };

type TypeElementGeometryTypeAll = "Point" | "Line" | "Circle";

type TypeElementGeometryTypeThatHasStartEnd = "Line";
type TypeElementGeometryTypeThatHasRadius = "Circle";
type TypeElementGeometryTypeThatHasNotRotation = "Point";

type TypeElementGeometryDataPosition<T extends TypeElementGeometryTypeAll> =
  T extends TypeElementGeometryTypeThatHasStartEnd
    ? {
        start: TypeCoordinateXYZ;
        end: TypeCoordinateXYZ;
      }
    : TypeCoordinateXYZ;

type TypeElementGeometryData<T extends TypeElementGeometryTypeAll> = {
  position: TypeElementGeometryDataPosition<T>;
} & (T extends TypeElementGeometryTypeThatHasRadius      ? { radius: number } : {})
  & (T extends TypeElementGeometryTypeThatHasNotRotation ? {} : { rotation: TypeCoordinateXYZ });

type TypeElement<T extends TypeElementGeometryTypeAll> = {
  type: "Element";
  geometryType: T;
  geometryData: TypeElementGeometryData<T>;
  properties?: TypeProperties;
};

type TypeGroup = {
  type: "Group";
  elements: TypeElementOrGroup[];
};

type TypeElementOrGroup = TypeElement<TypeElementGeometryTypeAll> | TypeGroup;

type TypeProjects = {
  [fileName: string]: {
    elements: TypeElementOrGroup[];
  };
};

export type TypeFileStructure = {
  system: {
    projects: TypeProjects;
  };
  default: { All: TypeProperties } & {
    [propertyName in TypeElementGeometryTypeAll]?: TypeProperties;
  };
  preferences: {
    unitOfMeasurement: "mm" | "cm";
  };
};

type RGB = `rgb(${string})`;
type HEX = `#${string}`;

type TypeColor = RGB | HEX;

type TypeProperties = {
  thickness: number;
  color: TypeColor;
};
