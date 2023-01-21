// Declare variables using literals

const persons = ["Ram", "Shyam", "Mohan", "Suresh"];
const num = 10;
const str = "I am string";
const b = true;
const person = {
    "firstName": "Ram",
    "lastname" : "Kumar"
}
function sayHello(person){
    console.log(`Hello ${person.firstName} ${person.lastname}`)
}

sayHello(person)

console.log("--------------type of--------------")

console.log(typeof persons)
console.log(typeof num)
console.log(typeof str)
console.log(typeof b)
console.log(typeof person)
console.log(typeof sayHello)

console.log("----------instanceof----------------")

console.log(persons instanceof Object)
console.log(num instanceof Number)
console.log(str instanceof String)
console.log(b instanceof Boolean)
console.log(person instanceof Object)
console.log(sayHello instanceof Function)

console.log("Declare variables using constructor instead of literals and then check the instanceof-------")
const num1 = new Number(19);
const str1 = new String("Hello")
const b1 = new Boolean(true)
console.log(num1 instanceof Number)
console.log(str1 instanceof String)
console.log(b1 instanceof Boolean)

