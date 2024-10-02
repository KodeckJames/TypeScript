// Type Aliases
type strinOrNumber = string | number

type strinOrNumberArray = (string | number)[]

type Guitarists = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type UserId = strinOrNumber 

// Literal types 
let myName: "JJ"
let userName: 'JJ' | 'Ondix' | "Cub"
userName = "JJ"

// Functions

const add = (a: number, b: number): number => {
    return a + b
}
// The number after the closing bracket just shows what data type the function will return

const logMsg = (message: any): void => {
    console.log(message);    
}
logMsg('Hello!')
logMsg(add(2, 3))

// Void is for functions that do not return anything ie any function that has a side effect that would not have an explicit return, should be a void type of returned data, which means there is no return at all.

let subtract = function (c: number, d: number): number{
    return c - d
}