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
