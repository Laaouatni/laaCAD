const positioning = {
  allAvaiableAxisPositions: {
    min: "Min",
    center: "Mid",
    max: "Max",
  },
  choosedPosition: {
    get x() {
      return positioning.allAvaiableAxisPositions.min;
    },
    get y() {
      return positioning.allAvaiableAxisPositions.min;
    },
  },
};

export { positioning };