console.log("\n-------array example 1--------")
const array1 = new Array(4);
console.log(array1.length)
array1[0] = "Ram";
array1[1] = 5;
array1[2] = true;
for(n of array1){
    console.log(n)
}
console.log(array1)

console.log("\n-------array example 2--------")
const array2 = [];
console.log(array2.length)
array2[0] = "Ram";
array2[1] = 5;
array2[2] = true;
console.log(array2)
console.log(array2.length)

console.log("\n-------push pop--------")
const array3 = [1, 2, 3, 4]
array3.push("new value") // Appends new elements to the end of an array, and returns the new length of the array.
console.log(array3)
array3.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(array3)

console.log("\n-------concat-----------")
const array4 = [1, 2, 3]
const array5 = [4, 5, 6]
const newArray = array4.concat(array5)
console.log(array4, array5, newArray)

console.log("\n-----shift unshift--------")

const array6 = [1, 2, 3, 4, 5]
console.log(array6.shift()) // Removes the first element from an array and returns it
console.log(array6.unshift("new value")) // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(array6)