var num = 10;
console.log(num);
function add(str1, str2) {
    var str3 = str1 + str2;
    return str3;
}
var result = add("Hello", "Typescript");
console.log(result);
console.log("--------type inference-------");
// Here a has any type and we can later assign it value of any other data type
var a;
a = "I am string now";
console.log(a);
a = 10;
console.log(a);
a = true;
console.log(a);
//Now another example
var a1 = 10;
a1 = 20;
console.log(a1); // This is ok we changed the value of a with the same type of data which was assigned to a1 while declaring that is number
a1 = "string";
