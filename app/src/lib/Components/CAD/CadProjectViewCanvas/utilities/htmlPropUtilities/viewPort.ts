type TypeViewPortProp = {
  [axis in "x" | "y"]: number | `${number}%`;
};

const viewPort: TypeViewPortProp = {
  x: "100%",
  y: "100%",
};

export { viewPort };

// function getIdealHeightOfSvg() {
//   const deviceHeight = window.innerHeight;
//   const main = document.querySelector("main") as HTMLElement;
//   const svg = document.querySelector("#svgContainer") as HTMLElement;
//   const childrensWithoutSvg = [...main.children].filter(
//     (child) => child !== svg,
//   );

//   return (
//     deviceHeight -
//     childrensWithoutSvg.reduce((acc, child) => {
//       return acc + child.clientHeight;
//     }, 0)
//   );
// }
