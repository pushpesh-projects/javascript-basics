console.log("--------type inference-------");
// Here a has any type and we can later assign it value of any other data type
var a;
a = "I am string now ut my type is of any so you can later assign me any value of other types as well";
console.log(a);
a = 10;
console.log(a);
a = true;
console.log(a);
console.log("Now another example");
var a1 = 10;
a1 = 20;
console.log(a1); // This is ok we changed the value of a with the same type of data which was assigned to a1 while declaring that is number
// a1 = "string" this is not allowed because ype 'string' is not assignable to type 'number'
console.log("Now another example");
var s1 = "I am declared as string so my data type becomes string";
console.log(s1);
s1 = "It is ok if you change my value to another string";
console.log(s1);
// s1 = 10 is not allowed
console.log("Now another example");
var n1; // n1 becomes type 10. It does not assigns the value 10
// n1 = 20 is not allowed , Type '20' is not assignable to type '10'.ts(2322)
n1 = 10; // Assigned the value
console.log(n1);
var n2 = 10; // Here we declared type 20 and also assign the value
console.log(n2);
// n2 = 20, Type '20' is not assignable to type '10'.ts(2322)
// let n3:10 = 30 is not allowed, Type '30' is not assignable to type '10'.ts(2322)
console.log("another example");
var c1 = "I am constant string";
console.log(c1);
// c1 = "Another value" is not allowed , as Cannot assign to 'c1' because it is a constant.ts(2588)
