"use strict";
//convert to more or less specific
//type is on types.d.ts
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be Carefull! Ts sees no proplem - but a string is returned
let nextVal = addOrConcat(2, 2, "add");
// The Dom
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// working in js but in react tsx it will denie and it will not work
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
