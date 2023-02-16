/*
JavaScript await Keyword
The await keyword is used inside the async function to wait for the asynchronous operation.
The syntax to use await is:
let result = await promise;
The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example.
*/

console.log("----example 1-----");
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();
