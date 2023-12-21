type TypeCoordinateXYZ = { [axisName in "x" | "y" | "z"]: number };

type TypeElementGeometryTypeAll = "Point" | "Line" | "Circle";
type TypeElementGeometryTypeGroupAll = "Rectangle";

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
} & (T extends TypeElementGeometryTypeThatHasRadius ? { radius: number } : {})
  & (T extends TypeElementGeometryTypeThatHasNotRotation
    ? {}
    : { rotation: TypeCoordinateXYZ });

type RGB = `rgb(${string})`;
type HEX = `#${string}`;

type TypeColor = RGB | HEX;

type TypeElement<T extends TypeElementGeometryTypeAll> = {
  type: "Element";
  geometryType: T;
  geometryData: TypeElementGeometryData<T>;
  properties?: TypePropertiesIndividual;
};

type TypeGroup = {
  type: "Group";
  geometryType: TypeElementGeometryTypeGroupAll;
  elements: TypeElementOrGroup[];
};

type TypeElementOrGroup = TypeElement<TypeElementGeometryTypeAll> | TypeGroup;

type TypeProjects = {
  [fileName: string]: {
    elements: TypeElementOrGroup[];
  };
};

type TypePropertiesIndividual = {
  thickness: number;
  color: TypeColor;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
}

type TypeProperties = { All: TypePropertiesIndividual } & {
  [propertyName in TypeElementGeometryTypeAll]?: Optional<TypePropertiesIndividual>;
};

type TypeDefaults = {
  properties: TypeProperties;
  preferences: TypePreferences;
}

type TypePreferences = {
  unitOfMeasurement: "mm" | "cm";
};

type TypeFileStructure = {
  system: {
    projects: TypeProjects;
    defaults: TypeDefaults
  };
};

export type { TypeFileStructure };
