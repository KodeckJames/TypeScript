"use strict";
// Literal types 
let myName;
let userName;
userName = "JJ";
// Functions
const add = (a, b) => {
    return a + b;
};
// The number after the closing bracket just shows what data type the function will return
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// Void is for functions that do not return anything ie any function that has a side effect that would not have an explicit return, should be a void type of returned data, which means there is no return at all.
let subtract = function (c, d) {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 6));
// Optional params
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default param value:
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
// You can make a param optional by putting a question mark after it, ie before the colon
// Default values don't work with aliases type and interface...
// Rest params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// Functions that explicitly throw errors, or have endless loops are given : never 
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
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
