// https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
// https://javascript.info/destructuring-assignment
console.log("---------Example 1----------");
// If the number of variables passed to the destructuring array literals are lesser than the elements in the array, the elements without variables to be mapped to are just left. There are no errors whatsoever.
let grocery = ["Bread", "Butter", "Potato", "Tomato", "Onion", "Chicken"];

let [item1, item2] = grocery;
console.log(`First Item is: ${item1}`);
console.log(`Second Item is: ${item2}`);

/* 
The Rest Parameter And Spread Syntax
The new (…) operator that was added in ES6 can be used in destructuring. 
If the (…) operator appear on the left-hand side in destructuring then it is a REST PARAMETER. 
A Rest parameter is used to map all the remaining elements in the array that have not been mapped to the rest variable itself. 
It is like gathering what is left behind. 
The Rest variable must always be the last otherwise a SyntaxError is thrown.
*/
console.log("\n---------Example 2----------");
let [item_1, item_2, ...item_rest] = grocery;
console.log(`First Item is: ${item_1}`);
console.log(`Second Item is: ${item_2}`);
console.log(`Rest Items are: ${item_rest}`);

console.log("\n---------Example 3----------");
console.log("Here we skip one item");
let [first_item, second_item, , ...rest_items] = grocery;
console.log(`First Item is: ${first_item}`);
console.log(`Second Item is: ${second_item}`);
console.log(`Rest Items are: ${rest_items}`);

console.log("\n---------Example 4----------");
// Declaration and assignment can be done separately in destructuring.
let first, second;
[first, second] = ["Male", "Female"];
console.log(first, second);

console.log("\n---------Example 5----------");
// If the number of variables passed to the destructuring array literals are more than the elements in the array, then the variables which aren’t mapped to any element in the array return undefined.
let [a, b, c, d, e, f] = ["Table", "Chair", "Mug", "Fan"];
console.log(a);
console.log(f);

// Default Value
// Destructuring allows a default value to be assigned to a variable if no value or undefined is passed. It is like providing a fallback when nothing is found.
console.log("\n---------Example 6----------");
var i, j, k;
[i = 40, j = 4] = [];
console.log(i); //Output: 40
console.log(j); //Output: 4

[i = 40, j = 4, k = 10] = [1, 23];
console.log(i); //Output: 1
console.log(j); //Output: 23
console.log(k); //Output: 10
