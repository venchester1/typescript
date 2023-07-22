//convert to more or less specific
//type is on types.d.ts

let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be Carefull! Ts sees no proplem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "add") as number;

// The Dom
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
// working in js but in react tsx it will denie and it will not work
const nextImg = <HTMLImageElement>document.getElementById("#img")

img.src;
myImg.src;


