"use strict";
// INDEX SIGNATURES
// They are when creating object but you don't know the exact name of the object keys but you do know the shape of the object and you can declare the type of the keys and the types of the values
// In TypeScript, index signatures are a way to define types for objects whose properties may not be known ahead of time, but where the type of the keys and values is consistent. This is useful when you're working with dynamic properties, like dictionaries or maps, where you might not know the exact property names in advance, but you know what type of data they will hold.
// EXAMPLE
// type ObjectWithKeys = {
//   [key: string]: number;
// };
// In this example:
const todaysTransactions = {
    Pizza: 8,
    Cookie: 7,
    Job: 9
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Cookie']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
