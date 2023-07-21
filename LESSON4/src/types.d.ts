// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }
