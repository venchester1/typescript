"use strict";
const echo = (args) => args;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));
// const checkBoolValue = <T>(arg: T): { arg: T; is: Boolean } => {
//     if (Array.isArray(arg) && !arg.length) {
//       return { arg, is: false };
//     }
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//       return { arg, is: false };
//     }
//     return { arg, is: !!arg };
//   };
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue(false));
console.log(checkBoolValue(0));
console.log(checkBoolValue(true));
console.log(checkBoolValue(1));
console.log(checkBoolValue('Dave'));
console.log(checkBoolValue(''));
console.log(checkBoolValue(null));
console.log(checkBoolValue(undefined));
console.log(checkBoolValue({})); // modified
console.log(checkBoolValue({ name: 'Dave' }));
console.log(checkBoolValue([])); // modified
console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue(NaN));
console.log(checkBoolValue(-0));
const processUser = (user) => {
    //process the user with login here
    return user;
};
console.log(processUser({ id: 1, name: 'ven' }));
// console.log(processUser({name: 'ven'}));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
///////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
