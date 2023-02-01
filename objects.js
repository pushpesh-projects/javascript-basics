// Declare an object
console.log("------------Declare an object------------")
const user = {
    name: "Pushpesh",
    age : 40,
    gender : "male",
    "my hobbies" : ["watching movies", "eating", "sleeping", "studying"]
}
console.log(user)

// fetch value of object properties
console.log("---------------fetch value of object properties------------")
console.log(user.name)
console.log(user.age)
console.log(user.gender)
console.log(user["name"])
console.log(user["my hobbies"])

// Change the value of object properties
console.log("-------Change the value of object properties------------")
user.age = 30
console.log(user.age)
const k = "email"
const value = "abc@gmail.com"
user[k] = value; // inside bracket, we have to write string either in double quotes or a variable which is string

// Iterate the object
console.log("--------Iterate the object-------------------")
for (key in user){
    console.log(key,":", user[key])
}

for (key of Object.keys(user)){
    console.log(`${key} ${user[key]}`)
}

console.log(typeof(Object.keys(user)))

console.log("------reference type-----")
const new_user = user;
console.log(new_user)
new_user.name = "Kanchan"
console.log(user)

// Spread operator
console.log("----------spread operator------------")
const obj1 = {
    "key1" : "value1",
    "key2" : "value2"
}
const obj2 = {
    "key3" : "value3",
    "key4" : "value4"
}
const obj3 = {...obj1, ...obj2}
console.log(obj3)

const obj4 = {...obj3, key5: "value5"}
console.log(obj4)

const obj5 = { ...["item1", "item2"] };
console.log(obj5)
const obj6 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(obj6);