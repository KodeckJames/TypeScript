type One = string
type Two = string | number
type Three = 'hello'

// onvert to more or less specific
let a: One = 'hello'
let b = a as Two 
// less specific
let c = a as Three
// More specific

let d = <One>'world'
let e = <String | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return ''+a+b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string

// NB: TS sees no problem - but a string is returned
let nextval: number = addOrConcat(2,2,'concat') as number