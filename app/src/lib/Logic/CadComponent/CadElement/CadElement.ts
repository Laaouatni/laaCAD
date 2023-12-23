const TYPE = "CadElement";

class CadElement extends CadComponent { 
  constructor() {
    super({ type: TYPE });
  }
}

export { CadElement };