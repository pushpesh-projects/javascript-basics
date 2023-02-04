console.log("-------Arrow function or anonymous function----------");
const singHappyBirthdaySong = () => {
  console.log("Happy birthday to you");
};
singHappyBirthdaySong();

console.log("-------concatenate strings---------");
const add = (str1, str2) => {
  let str3 = str1 + str2;
  return str3;
};
let result = add("Hello", " Typescript");
console.log(result);

console.log("---------Add numbers--------");
const adding_numbers = (num1, num2, num3) => {
  console.log("some of numbers is", num1 + num2 + num3);
};
adding_numbers(10, 20, 30);

console.log("---------Return true if number is even--------");
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(19));

const isEven1 = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
console.log(isEven(20));

const isEven2 = (num) => (num % 2 === 0 ? true : false);
console.log(isEven2(22));

// Here we have one param in function then we can skip the parenthesis,
//also the curly bracket and return statement can be removed since there is only one line with return statement
const isEven3 = (num) => num % 2 === 0;
console.log(isEven3(24));

// the curly bracket of function body is removed since there is only one line in body
console.log("-------first character of string-----");
const printFirstChar = (str) => console.log(str[0]);
printFirstChar("Harshit");

console.log("-----find position of number is in array-----");
const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findTarget([10, 20, 30, 40, 50], 50));
