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

// Primitive vs reference type
let num2 = 10; 
let num3 = num2; // Here num3 and num2 have different space on memory
console.log(num2);
console.log(num3);
console.log("After increment");
num2++; // increasing the num2 value will not impact num3
console.log(num2);
console.log(num3);

// Array is reference type
let array1 = [1, 2]
let array2 = array1; // Here array2 and array1 holds the address of array [1, 2]
console.log(array1);
console.log(array2),
array1.push(3);
console.log("After pushing element");
console.log(array1);
console.log(array2);
