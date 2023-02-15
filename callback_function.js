// when a function is passed as an argument then it is called a callback function.
console.log("------example 1-------")
let greet = (name)=>{
    console.log(`Hello ${name}`);
}

let start = (greet)=>{
    console.log("Lets start");
    greet("Pushpesh");
}

start(greet);



console.log("---when we want synchronous operation--");

console.log("------example 2-------")
function sayHello(name, callback){
    console.log("Hello world");
    callback(name);
}

function printName(name){
    console.log(`Hello ${name}`);
}

setTimeout(sayHello, 2000, "Pushpesh", printName);