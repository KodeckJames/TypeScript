// In TypeScript, generics allow you to create reusable components that work with a variety of data types while providing type safety. They let you define a function, class, or interface that can work with any type, without sacrificing the type-checking benefits TypeScript provides.

// GENERIC FUNCTIONS
const echo = <T>(arg: T): T => arg
// This function is made generic so it works with any type we would pass into this function

const siObj = <T>(arg: T): boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
// typeof arg === 'object': This checks if arg is an object. In JavaScript, arrays and null are also technically "objects," so this alone isn't enough to verify it's a pure object.
// !Array.isArray(arg): This ensures that arg is not an array. Although arrays are objects in JavaScript, they are a specific type of object, and this condition ensures you're not dealing with an array.
// arg !== null: In JavaScript, null is considered an "object" by the typeof operator. This condition ensures that arg is not null.
console.log(siObj({}));           // true (because it's a plain object)
console.log(siObj([]));           // false (because it's an array)
console.log(siObj(null));         // false (because it's null)
console.log(siObj(42));           // false (because it's a number)
console.log(siObj("hello"));      // false (because it's a string)

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if (siObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}
// isTrue is a generic function, meaning it can work with any data type (T).
// It returns an object with the original argument (arg: T) and a boolean (is: boolean).
// Checks if the argument (arg) is an array using Array.isArray(arg).
// If the array is empty (!arg.length), it returns false for is because an empty array is considered falsy in this context.
//Calls siObj(arg), which is likely another function (defined elsewhere) that checks if arg is an object (and not an array).
// Checks if the object has no keys by calling Object.keys(arg) and verifying its length.
// If the object has no keys, it returns false for is.
// If the previous conditions are not met (i.e., arg is not an empty array or an empty object), it returns true or false for is based on the truthiness of arg.
// !!arg is a common JavaScript pattern that converts any value to its boolean equivalent.

// GENERIC CLASSES
class StateObject<T>{
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T{
        return this.data
    }
    set state(value: T) {
        this.data = value
    }
}
