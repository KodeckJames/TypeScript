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
