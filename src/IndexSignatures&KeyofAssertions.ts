// INDEX SIGNATURES
// They are when creating object but you don't know the exact name of the object keys but you do know the shape of the object and you can declare the type of the keys and the types of the values
// In TypeScript, index signatures are a way to define types for objects whose properties may not be known ahead of time, but where the type of the keys and values is consistent. This is useful when you're working with dynamic properties, like dictionaries or maps, where you might not know the exact property names in advance, but you know what type of data they will hold.
// EXAMPLE
// type ObjectWithKeys = {
//   [key: string]: number;
// };
// In this example:

// key: string means the object can have any number of properties with keys that are strings.
// number means that the values corresponding to those keys must be numbers.


// interface TransactionObj{
//   readonly [index: string]: number
// }
interface TransactionObj {
    readonly [index: string]: number
    Pizza: number
    Cookie: number
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: 8,
    Cookie: 7,
    Job: 9,
    JJ: 18
}
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Cookie']);

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40

///////////////////////////////////////////////

interface Student{
    [index: string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: "JJ",
    GPA: 90,
    classes: [100, 99],
    other: 'LowKey'
}
// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

// HOW TO ITERATE OVER AN OBJECT THAT DOESN'T HAVE AN INDEX SIGNATURE PROVIDED:

for (const key in student) {
    console.log(`${key} ${student[key as keyof Student]}`);    
}

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key} : ${student[key]}`);
}

logStudentKey(student, 'name')

///////////////////////////////////////////////
// interface Incomes{
//     [key: String]: number
// }

// The below code is just an alternative of index signatures
type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number | string>
// This means that salary, bonus and sidehustle keys cantake in number or string data types
const monthlyIncomes: Incomes = {
    salary: 500000,
    bonus: 2000,
    sidehustle: 'coding'
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
    
}