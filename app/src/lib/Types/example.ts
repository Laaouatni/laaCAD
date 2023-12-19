// type TypeElementType = "Element" | "Group";

// type TypeElementGeometryType = "Point" | "Line" | "Circle";

// type TypeCoordinateXYZ = {
//   [axisName in "x" | "y" | "z"]: number;
// };

// type TypeElementGeometryDataPosition = {
//   start: TypeCoordinateXYZ;
//   end: TypeCoordinateXYZ;
// };

// type TypeElementGeometryData = {
//   position: TypeElementGeometryDataPosition;
//   rotation: TypeCoordinateXYZ;
//   radius?: number;
// };

// type TypeProperties = {
//   thickness: number;
//   color: string;
// };

// type TypeElement = {
//   type: TypeElementType;
//   geometryType: TypeElementGeometryType;
//   geometryData: TypeElementGeometryData;
//   properties: TypeProperties;
//   elements?: TypeElement[];
// };

// type TypeProjects = {
//   [fileName: string]: {
//     elements: TypeElement[]
//   }
// }

// type TypeFileStructure = {
//   system: {
//     projects: TypeProjects;
//   },
//   default: {
//     [propertyName in "*" | TypeElementGeometryType]: TypeProperties
//   }
// }