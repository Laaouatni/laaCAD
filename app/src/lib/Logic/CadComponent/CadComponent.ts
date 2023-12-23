type allPossibleComponentType = "CadElement" | "CadGroup";

class CadComponent {
  type: allPossibleComponentType;
  constructor(props: {type: allPossibleComponentType}) {
    this.type = props.type;
  }
}