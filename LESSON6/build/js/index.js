"use strict";
class Coder {
    //visibility modifier ex. public, readonly, private, protected
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello , Im ${this.age}`;
    }
}
const ven = new Coder("Ven", "Rock", 29);
console.log(ven.getAge());
// console.log(ven.age);
// console.log(ven.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev("Mac", "sara", "lofi", 25);
console.log(sara.getLang());
// console.log(sara.age);
// console.log(sara.lang);
//////////////////////////////////////////////////////////
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Ven = new Peeps("Ven");
console.log(Steve.id); //2
console.log(Peeps.count); //3 depends on how many created
////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Let Zep'];
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen'];
