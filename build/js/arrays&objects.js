"use strict";
// infer == figure out
let strArr = ['one', 'hey', 'JJ'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
strArr[0] = 'John';
// switches first string to John
strArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
mixedData = strArr;
let tests = [];
let bands = [];
bands.push('Van Halen');
// TUPLES
// A tuple is a special type of array where the types and number of elements are fixed. Each element in the tuple has a specific type that must be followed, which provides more structure compared to a regular array.
// Tuples with Optional or Rest Elements:
let person;
person = ["Alice"]; // The number is optional here
let multipleNumbers;
multipleNumbers = ["Numbers", 1, 2, 3, 4]; // This works due to the rest element
let mytuple = ['Dave', 42, true];
let mixed = ["JJ", 95, false];
mixed = mytuple;
// OBJECTS
let myobj;
myobj = [];
// An array is a special type of object
myobj = bands;
myobj = {};
const exampleobj = {
    prop1: "JJ",
    prop2: true,
};
exampleobj.prop1 = "James";
// type Guitarist:
// This is a custom type definition in TypeScript. You define it with the keyword type followed by the name of the type (Guitarist).
// A type in TypeScript is used to define the shape or structure of an object.
// name: string:
// The name property is of type string, meaning any object of type Guitarist must have a name property, and its value must be a string.
// To make a value optional, add a question mark after it. ie: active?
// Instead of type you can use interface, which does the same thing except that it doesn't have an equal to = mark like type
// 
let evh = {
    name: "James",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
};
// evh = jp
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
};
console.log(greetGuitarist(evh));
// ENUMS
// They are something added to the language andruntime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
