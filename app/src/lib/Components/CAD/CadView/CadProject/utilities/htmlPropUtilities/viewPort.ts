type TypeViewPortProp = {
  [axis in "x" | "y"]: number | `${number}%`;
}

const viewPort: TypeViewPortProp = {
  x: "100%",
  y: "100%",
};

export { viewPort };