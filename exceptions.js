console.log("-------try catch, an exception occurred in try anc gracefully catches in catch block------")

try{
    console.log("I do some work before I throw the exception")
    throw "An exception occurred";
}catch(e){
    console.log(e)
}

console.log("\n-------try catch finally-------")


try{
    throw "An exception occurred";
}catch(e){
    console.log(e)
}finally{
    console.log("I am always executed")
}

console.log("\n---------try catch finally when no exception thrown in try----------")
try{
    console.log("No exception occurred");
}catch(e){
    console.log(e)
}finally{
    console.log("I am always executed")
}
