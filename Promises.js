/* 
The Promise() constructor takes a function as an argument. 
The function also accepts two functions resolve() and reject().
If the promise returns successfully, the resolve() function is called. 
And, if an error occurs, the reject() function is called.
*/

const count = true;

const countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});
console.log(countValue);

/* 
In the above program, the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.
You can chain multiple then() methods with the promise.
*/

countValue
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue() {
    console.log("You can call multiple functions this way");
  })
  .catch(function errorValue(result) {
    console.log(result);
  })
  .finally(function alwaysExecuted() {
    console.log("This code is always executed");
  });
