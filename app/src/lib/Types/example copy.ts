type TypeCoordinateXYZ = { [axisName in "x" | "y" | "z"]: number };

type TypeElementGeometryTypeAll = "Point" | "Line" | "Circle";

type TypeElementGeometryTypeThatHasStartEnd = "Line";
type TypeElementGeometryTypeThatHasRadius = "Circle";

type TypeElementGeometryDataPosition<T extends TypeElementGeometryTypeAll> =
  T extends TypeElementGeometryTypeThatHasStartEnd
    ? {
        start: TypeCoordinateXYZ;
        end: TypeCoordinateXYZ;
      }
    : TypeCoordinateXYZ;

type TypeElementGeometryData<T extends TypeElementGeometryTypeAll> = {
  position: TypeElementGeometryDataPosition<T>;
  rotation: TypeCoordinateXYZ;
} & (T extends TypeElementGeometryTypeThatHasRadius ? { radius: number } : {});

type TypeProperties = {
  thickness: number;
  color: string;
};

type TypeElement<T extends TypeElementGeometryTypeAll> = {
  type: "Element";
  geometryType: T;
  geometryData: TypeElementGeometryData<T>;
  properties: TypeProperties;
};

type TypeGroup = {
  type: "Group";
  elements: TypeElement<TypeElementGeometryTypeAll>[];
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
  default: { "All": TypeProperties } & {
    [propertyName in TypeElementGeometryTypeAll]?: TypeProperties;
  };
};
