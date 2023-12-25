type TypeViewPortProp = {
  [axis in "x" | "y"]: number | `${number}%` | "auto";
}

const viewPort: TypeViewPortProp = {
  x: "100%",
  y: "auto",
};

export { viewPort };