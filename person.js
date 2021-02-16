// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        // include variable syntax
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person;
// const person = {
//     name: 'Jane Doe',
//     age: 30
// }

// module.exports = person;