class Coder {
  secondLang!: string;

  //visibility modifier ex. public, readonly, private, protected
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello , Im ${this.age}`;
  }
}

const ven = new Coder("Ven", "Rock", 29);
console.log(ven.getAge());
// console.log(ven.age);
// console.log(ven.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const sara = new WebDev("Mac", "sara", "lofi", 25);
console.log(sara.getLang());
// console.log(sara.age);
// console.log(sara.lang);

//////////////////////////////////////////////////////////

class Guitarist implements Musician {
    name: string
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));

//////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Ven = new Peeps("Ven")

console.log(Steve.id); //2
console.log(Peeps.count); //3 depends on how many created

////////////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of string')
    }
}


const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Let Zep']
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
MyBands.data = ['Van Halen' ]
