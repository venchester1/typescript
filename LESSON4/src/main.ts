// "LITERAL TYPE"
let myName: "Ven";

let userName: "Ven" | "ches" | "baaa";

userName = "Ven";

//FUNCTIONs
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

let multiply: mathFunction = function (e, f) {
  return e * f;
};

logMsg(multiply(2, 3));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//With supply number
//default param value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
  return a + b + c
};

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(undefined,3));



//Rest Parameters

const total = (a: number,...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}


logMsg(total(10, 1,2))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}


const infinite = () => {
    let i: number = 1
    while(true) {
        i++
        if(i > 100 ) break
    }
}
//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

const isString = (value: any): boolean => {
    return typeof value === "string" ? true : false
}

//use of the never type
const numberOrString = (value: number | string): string => {
    if(isString(value)) return 'string'
    if(isNumber(value)) return 'number'
    return createError("this should never happen!")
}
