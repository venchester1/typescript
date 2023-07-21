"use strict";
// "LITERAL TYPE"
let myName;
let userName;
userName = "Ven";
//FUNCTIONs
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (e, f) {
    return e * f;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//With supply number
//default param value
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 1, 2));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("this should never happen!");
};
