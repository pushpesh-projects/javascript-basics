/*
var 
1. function scoped
2. can be changed in scope, we can change the value and data type
3. available before declaration
*/
console.log("-----------Var example----------")
var husband_name = "Pushpesh Kumar";
console.log(husband_name);

wife_name = "Kanchan Dubey";
console.log(wife_name);

// console.log(son_name) ReferenceError: son_name is not defined

console.log(son); // undefined, there wont be any error because son is declared later though at this line its value is undefined
var son = "Jigyansh Pandey";
console.log(son);

if (son === "Jigyansh Pandey") {
  son = "Sweet Sona Beta"; // It will change the value of son as var variables are function scope. Here the entire file is treated as a giant function by node js runtime
  console.log(son);
}

console.log(son); // changed value

/*
let
Block scoped, only available in side the block denoted by {}
can be changed in scope, we can change the value and data type
Only available after declaration
*/

console.log("-----------Let example 1----------")

let grand_parent = "Raj Narayan Dubey"
console.log(grand_parent)

let place = "Ara"
if(place === "Ara"){
    let grand_parent = "Ranjit Kumar pandey" // Here we redeclare the  grand_parent using let then it is treated as a different block scoped variable
    console.log(grand_parent) // This will print Ranjit Kumar pandey 
}

console.log(grand_parent) // This will print Raj Narayan Dubey

console.log("-----------Let example 2----------")
let grand_mother = "Umravati"
console.log(grand_mother)

let current_place = "Ara"
if(current_place === "Ara"){
    grand_mother = "Uma" // Here we do not redeclare, just changing the value because of this it actually changes the value of original variable
    console.log(grand_mother) // This will print Uma
}

console.log(grand_mother) // This will print Uma

/*
const
Block scoped , like let
Can not be  changed
Only available after declaration
*/

const first_son = "Jigyansh Pandey"
console.log(first_son)
// first_son = "Jigyansh"  TypeError: Assignment to constant variable.
console.log(first_son)

/*
when to use what
const by default
let in loops
*/
