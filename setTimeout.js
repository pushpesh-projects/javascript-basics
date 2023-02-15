console.log("-------Example 1 ---------")
const demo = () => {
    console.log("Hello world");
}

setTimeout(demo, 3000);

// In the above program, the setTimeout() method calls the demo() function after 3000 milliseconds (3 second).

console.log("I will be printed before hello world !")

console.log("-------Example 2---------")

const printName = (fname, lname) => {
    console.log(`Your name is ${fname} ${lname}`)
}

setTimeout(printName, 3000, "Pushpesh", "Kumar");
console.log("I print your name");
/*
ou can also pass additional arguments to the setTimeout() method. The syntax is:
setTimeout(function, milliseconds, parameter1, ....paramenterN);
When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.
*/