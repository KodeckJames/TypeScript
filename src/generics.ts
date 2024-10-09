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

const store = new StateObject("John")
console.log(store.state);
store.state = "JJ"

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Dave', 42, true])
console.log(myState.state);


// GENERIC INTERFACE
interface BoolCheck<T>  {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false}
    }
    if (siObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value:arg, is: false}
    }
    return {value:arg, is: !!arg}
}

interface HasId{
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    // process the user with logic here:
    return user
}
console.log(processUser({id: 1, name: 'JJ'}));

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));
