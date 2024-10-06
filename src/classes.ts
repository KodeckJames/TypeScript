// A basic class includes a constructor, properties, and methods.
// Properties: Variables that belong to the class.
// Constructor: A special method for initializing class properties when creating an object.
// Method: Functions that belong to the class and define behavior
class Coder{
    // Properties :-NB- once you add the visibility modifiers in the constructor, it becomes redundant so you can do away with the properties
    // name: string
    // music: string
    // age: number
    // lang: string
    secondLang!: string
    // The ! in secondLang!: string is a TypeScript non-null assertion operator. It tells TypeScript that even though you haven't explicitly initialized secondLang in the class or constructor, you guarantee that it will be assigned a value later on, so TypeScript should not throw an error for potentially being undefined or null.


    // Constructor to initialize properties
    constructor(
    public readonly name: string, 
    public music: string,
    private age: number,
    protected lang: string = 'TypeScript'

    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age} Years old`
    }
}
const JJ = new Coder('JJ', 'Rock', 42)
console.log(JJ.getAge());


// ACCESS/ VISIBILITY MODIFIERS'
// Access modifiers control the visibility of properties and methods. TypeScript offers three access modifiers:
// public (default): Accessible from anywhere.
// private: Accessible only within the class.
// protected: Accessible within the class and its subclasses.

// INHERITANCE:
// Classes can extend other classes, allowing the child class to inherit properties and methods from the parent class.

class WebDev extends Coder{
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return `I write ${this.lang}`
    }
}
const Sara = new WebDev('windows', 'Sara', 'gospel', 20)
console.log(Sara.getLang);