console.log("--------for loop-------");

const names = ["Glenn", "Ralph", "Colin", "Ove"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("\n--------while loop--------");

let whileIndex = 0;
while (whileIndex < names.length) {
  console.log(names[whileIndex]);
  whileIndex++;
}

console.log("\n--------for of loop------");

for (n of names) {
  console.log(n);
}
