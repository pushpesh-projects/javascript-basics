/*
In the above program, the async keyword is used before the function to represent that the function is asynchronous.
Since this function returns a promise, you can use the chaining method then().
*/
console.log("----example 1-----");

async function f() {
  console.log("Async function.");
  return Promise.resolve("Promise is resolved");
}

f().then(function (result) {
  console.log(result);
});
