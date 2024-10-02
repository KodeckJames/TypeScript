// let username = "JJ"
// console.log(username);

// tsc main.ts
// the above command compiles a JS file from our TS file by creating another similar JS file
// npx tsc main.ts -w watches the file and recompiles it automatically

let a: number = 12
let b: number = 6
let c: number = 2

console.log(a / b);

console.log(c * b);

//  npx tsc --init


let myname: string = "JJ"
let life: number
let isLoading: boolean
let album: any;
// let album: string | number;



myname = "Ondix"
life = 18
isLoading = true
album = 10

const sum = (a: number, b: number) => {
    return a+b
}
console.log(sum(3, 8));

let postid: number | string
let isActive: number | boolean

let re: RegExp = /\w+/g


