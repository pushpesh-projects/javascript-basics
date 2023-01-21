const date = new Date(); // current date

console.log(date) 

console.log(date.getTime()) // Get the time value in milliseconds

console.log(date.getDay()) // 0 means Sunday, 1 means Monday and so on

console.log(date.getDate())

console.log(date.getMonth()) // 0 means January, 1 means February and so on

console.log(date.getFullYear())

console.log("---------Set a date-------")

const newDate = new Date("1975", "02", "23") // month 02 means march as counting starts from 0
console.log(newDate)