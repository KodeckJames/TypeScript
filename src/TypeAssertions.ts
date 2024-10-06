type One = string
type Two = string | number
type Three = 'hello'

// onvert to more or less specific
let a: One = 'hello'
let b = a as Two 
// less specific
let c = a as Three
// More specific

let d = <One>'world'
let e = <String | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return ''+a+b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string

// NB: TS sees no problem - but a string is returned
let nextval: number = addOrConcat(2,2,'concat') as number

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}
// IMPLEMENTS
// In TypeScript, implements is used in classes to enforce a structure based on an interface or a type. When a class implements an interface, it ensures that the class adheres to the contract defined by the interface, meaning it must contain the properties and methods declared in the interface.

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jojo', 'guitar')
console.log(Page.play('strums'));

// In TypeScript, the static keyword is used to define properties and methods on a class that belong to the class itself, rather than to instances of the class. This means you can access these static members without creating an instance of the class.

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

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count);

// GETTERS AND SETTERS
// TypeScript allows defining getters and setters for encapsulating access to class properties:

class Bands{
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}
const MyBands = new Bands()
MyBands.data = ['Neil', 'Led']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ']
console.log(MyBands.data);
MyBands.data = ['Van' ]

// NB:- Setters can't return a value