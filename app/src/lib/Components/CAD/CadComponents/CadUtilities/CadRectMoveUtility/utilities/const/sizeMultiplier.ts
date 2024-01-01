const sizeMultiplier = {
  desktop: 4,
  get mobile() {
    return this.desktop * this.desktop;
  },
};

export { sizeMultiplier };