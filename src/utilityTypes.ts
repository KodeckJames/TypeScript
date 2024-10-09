// UTILITY TYPES
// Utility types in TypeScript are built-in types that help manipulate and transform types to make them more versatile, reusable, and concise. They allow developers to work with existing types in a more flexible way, making the code cleaner and more readable.

// 1.Partial<Type>
// Converts all properties of a type/ interface into optional properties.

interface Assignement{
    studenrId: string,
    title: string,
    grade: number,
    verified?: boolean
}
// const partialUser: Partial<Assignement> = { studenrId: '55' }
const updateAssignement = (
    assign: Assignement, propsToUpdate: Partial<Assignement>
): Assignement => {
    return {...assign, ...propsToUpdate}
}

// 2.Required and Readonly
// Converts all optional properties of a type into required properties.
// ReadOnly Converts all properties of a type into read-only properties (i.e., they cannot be modified after being set).
const recordAssignement = (assign: Required<Assignement>): Assignement => {
    //send to database, etc
    return assign
}

// 3.Record<Keys, Type>
// Creates an object type with specific keys and values.
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue:'0000FF'
}

type Students = "JJ" | "Madz"
type LetterGrades = "A" | "B" | "c" | "D" | "Y"
const finalGrades: Record<Students, LetterGrades> = {
    JJ: 'A',
    Madz:'A'
}
interface Grades{
    assign1: number,
    assign2: number,
}
const gradedata: Record<Students, Grades> = {
    JJ: { assign1: 90, assign2: 95 },
    Madz:{assign1:85, assign2:97}
}

// 4.Pick<Type, Keys> and Omit<Type, Keys>
// Creates a new type by picking a set of properties from an existing type.
type AssignResult = Pick<Assignement, 'studenrId' | 'grade'>
const score: AssignResult = {
    studenrId: "k123",
    grade:85,
}
type AssignPreview = Omit<Assignement, 'grade' | 'verified'>
const preview: AssignPreview = {
    studenrId: 'k123',
    title:'Final Project'
}

// 5.Exclude<UnionType, ExcludedMembers> and Extract<UnionType, Members>
// Excludes specific members from a union type.
// Extracts specific members from a union type.

type adjustedGrade = Exclude<LetterGrades, 'U'>
type highGrades = Extract<LetterGrades, "A" | "B">

// 6.Nonnullable
// Removes null and undefined from a type.
type AllPossibleGrades = "Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// 7.ReturnType<Type>
// Gets the return type of a function type.
// type newAssign = { title: string, points: number }
const createNewAssign = (title: string, points: number)=>{
    return {title, points}
}
type NewAssign = ReturnType<typeof createNewAssign>
const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);

// 8.PaParameters<Type>rameters
// Extracts the parameter types of a function type as a tuple.
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);

// Awaited<Type>
// Used to get the type of the value a Promise resolves to.
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))