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

// Creating functions with type:
// type mathFunction = (a: number, b: number) => number
interface mathFunction{
    (a: number, b: number): number
}
 
let multiply: mathFunction = (c, d) => {
    return c * d
}

logMsg(multiply(2, 6))

// Optional params
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b  
}

// Default param value:
const sumAll = (a: number, b: number, c: number = 2): number => {
    
    return a + b + c 
}

logMsg(addAll(2,3,2))
// You can make a param optional by putting a question mark after it, ie before the colon
// Default values don't work with aliases type and interface...

// Rest params
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr)=> prev + curr)
}
logMsg(total(1, 2,3,4)) 


// Functions that explicitly throw errors, or have endless loops are given : never 
const createError = (errMsg: string): never => {
    throw new Error(errMsg);    
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'? true : false
}

// Use of the never type
const numberOrString = (value: number | string):
    string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}