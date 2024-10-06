"use strict";
// onvert to more or less specific
let a = 'hello';
let b = a;
// less specific
let c = a;
// More specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// NB: TS sees no problem - but a string is returned
let nextval = addOrConcat(2, 2, 'concat');
// IMPLEMENTS
// In TypeScript, implements is used in classes to enforce a structure based on an interface or a type. When a class implements an interface, it ensures that the class adheres to the contract defined by the interface, meaning it must contain the properties and methods declared in the interface.
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jojo', 'guitar');
console.log(Page.play('strums'));
// In TypeScript, the static keyword is used to define properties and methods on a class that belong to the class itself, rather than to instances of the class. This means you can access these static members without creating an instance of the class.
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
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
// GETTERS AND SETTERS
// TypeScript allows defining getters and setters for encapsulating access to class properties:
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
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil', 'Led'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ'];
console.log(MyBands.data);
MyBands.data = ['Van'];
// NB:- Setters can't return a value
