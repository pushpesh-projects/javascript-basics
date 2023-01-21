console.log("-------string to integer------")

let num1 = '100'
console.log(parseInt('101'))
console.log(num1)
console.log(parseInt('avc'))
console.log(parseInt('1.5')) // 1 Anything after special character is ignored
console.log(parseInt('1+1')) // 1
console.log(parseInt(`${1+1}`)) // 2
console.log(parseInt('0.5')) // 0
console.log(parseInt('.5')) // NaN


console.log("-------string to float------")

let flo1 = '100.50'
console.log(parseFloat('100.06'))
console.log(parseFloat(flo1))
console.log(parseFloat('BC'))

console.log("-------convert to string------")

console.log((100).toString())
console.log((101.05).toString())