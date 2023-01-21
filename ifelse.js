console.log("\n------if with logical or-------");
const status_code = 201;

if (status_code === 200 || status_code === 201) {
  console.log("OK");
} else if (status_code === 400) {
  console.log("Error");
} else {
  console.log("Unknown status");
}

console.log("\n------Ternary if-------");
const status_code1 = 400;
const message = status_code1 === 200 ? "OK" : "Error";
console.log(message);

console.log("\n------implicit condition------");
const address = "ABC";
if (address) {
  console.log("Address exist");
} else {
  console.log("Address does not exist");
}

const contact_no = 91285968;
if (contact_no) {
  console.log("contact no exist");
} else {
  console.log("contact no does not exist");
}

console.log("\n-------case sensitive-------");
const book_name = "Good Book";
if (book_name.toUpperCase() === "GOOD BOOK") {
  console.log("Name matches");
} else {
  console.log("Name does not match");
}
