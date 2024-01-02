type TypeChangeChildTypeInPosition<Parent, Child, NewChild> =
  Parent extends infer ParentCopy
    ? ParentCopy extends object
      ? {
          [Key in keyof ParentCopy]: ParentCopy[Key] extends Child
            ? NewChild
            : ParentCopy[Key] extends object
            ? TypeChangeChildTypeInPosition<ParentCopy[Key], Child, NewChild>
            : ParentCopy[Key];
        }
      : Parent
    : never;

export type { TypeChangeChildTypeInPosition };
