console.log("-------function expression----------");
const singHappyBirthdaySong= function () {
  console.log("Happy birthday to you");
}
singHappyBirthdaySong();

console.log("-------concatenate strings---------");
const add= function (str1, str2) {
  let str3 = str1 + str2;
  return str3;
}
let result = add("Hello", " Typescript");
console.log(result);

console.log("---------Add numbers--------");
const adding_numbers = function (num1, num2, num3) {
  console.log("some of numbers is", num1 + num2 + num3);
}
adding_numbers(10, 20, 30);

console.log("---------Return true if number is even--------");
const isEven= function (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(19));

const isEven1= function (num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(20));

const isEven2= function (num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven2(22));

const isEven3=  function (num) {
  return num % 2 === 0;
}
console.log(isEven3(24));

console.log("-------first character of string-----");
const printFirstChar = function (str) {
  console.log(str[0]);
}
printFirstChar("Harshit");

console.log("-----find position of number is in array-----");
const findTarget= function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findTarget([10, 20, 30, 40, 50], 50));
