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
} & (T extends TypeElementGeometryTypeThatHasRadius ? { radius: number } : {}) &
  (T extends TypeElementGeometryTypeThatHasNotRotation
    ? {}
    : { rotation: TypeCoordinateXYZ });

type RGB = `rgb(${string})`;
type HEX = `#${string}`;

type TypeColor = RGB | HEX;

type TypeProperties = {
  thickness: number;
  color: TypeColor;
};

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

type TypeDefaults = { All: TypeProperties } & {
  [propertyName in TypeElementGeometryTypeAll]?: TypeProperties;
};

type TypePreferences = {
  unitOfMeasurement: "mm" | "cm";
};

export type TypeFileStructure = {
  system: {
    projects: TypeProjects;
  };
  defaults: TypeDefaults;
  preferences: TypePreferences;
};
