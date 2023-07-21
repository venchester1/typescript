"use strict";
let stringArr = ["one", "two", "ven"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "john";
stringArr.push("ven");
guitars[0] = 1984;
guitars.unshift("jim");
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ["dave", 42, true];
let mixed = ["John", 1, false];
// myTuple = mixed
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: "dave",
    prop2: true,
};
exampleObj.prop1 = "john";
//TYPES GUITARIST AT types.d.ts
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ["I", "II", "IV"]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp)); //HELLO JIMMY
//Enums
// "Unlike most Typescript features, Enums are not a type-level addition to javascript but something added to the language and runtime"
//types at types.d.ts (GLOBAL)
console.log(Grade.U);
